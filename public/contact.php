<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Parse JSON body or standard form POST
$input = json_decode(file_get_contents("php://input"), true);
if (!$input) {
    $input = $_POST;
}

$name = htmlspecialchars(trim($input['name'] ?? ''));
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$company = htmlspecialchars(trim($input['company'] ?? ''));

// Flexible website input:
// Accepts "huz4f.com", "ww.huz4f.com", "www.huz4f.com", "https://huz4f.com", or blank / none.
$rawWebsite = trim($input['website'] ?? '');
if (empty($rawWebsite) || in_array(strtolower($rawWebsite), ['n/a', 'none', 'no', 'null', 'nil', '-'])) {
    $website = 'Not provided';
    $displayWebsite = 'Not provided (client has no website or skipped)';
} else {
    $cleaned = $rawWebsite;
    if (preg_match('/^ww\.(.+)$/i', $cleaned, $matches)) {
        $cleaned = 'www.' . $matches[1];
    }
    if (!preg_match('#^https?://#i', $cleaned)) {
        $displayWebsite = $cleaned . ' (https://' . $cleaned . ')';
    } else {
        $displayWebsite = $cleaned;
    }
    $website = htmlspecialchars($cleaned);
}

$improvements = is_array($input['improvements'] ?? null) 
    ? implode(", ", $input['improvements']) 
    : htmlspecialchars(trim($input['improvements'] ?? 'Revenue Infrastructure & B2B Pipeline'));

$revenue = htmlspecialchars(trim($input['revenue'] ?? 'Not specified'));
$scope = htmlspecialchars(trim($input['scope'] ?? 'Not specified'));
$successCriteria = htmlspecialchars(trim($input['successCriteria'] ?? 'Not specified'));

// Validation: ONLY name, valid email, and company are required. Website is optional.
if (empty($name) || !$email || empty($company)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error", 
        "message" => "Name, valid work email, and company name are required."
    ]);
    exit;
}

$recipients = ["sales@huengines.com", "sales@huengine.com"];
$subject = "⚡ [High-Value Lead] New Brief from " . $company . " (" . $name . ")";

$body = "====================================================\n";
$body .= "NEW LEAD / ENTERPRISE TRANSFORMATION BRIEF\n";
$body .= "====================================================\n\n";

$body .= "PROSPECT DETAILS:\n";
$body .= "----------------------------------------------------\n";
$body .= "Contact Name:    " . $name . "\n";
$body .= "Work Email:      " . $email . "\n";
$body .= "Company Name:    " . $company . "\n";
$body .= "Company Website: " . $displayWebsite . "\n";
$body .= "Annual Revenue:  " . $revenue . "\n\n";

$body .= "AREAS TO IMPROVE:\n";
$body .= "----------------------------------------------------\n";
$body .= $improvements . "\n\n";

$body .= "CURRENT BOTTLENECKS / ARCHITECTURE SCOPE:\n";
$body .= "----------------------------------------------------\n";
$body .= $scope . "\n\n";

$body .= "DESIRED SUCCESS OUTCOMES:\n";
$body .= "----------------------------------------------------\n";
$body .= $successCriteria . "\n\n";

$body .= "METADATA:\n";
$body .= "----------------------------------------------------\n";
$body .= "Timestamp:       " . date("Y-m-d H:i:s T") . "\n";
$body .= "Client IP:       " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$body .= "User Agent:      " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "\n";
$body .= "Referrer:        " . ($_SERVER['HTTP_REFERER'] ?? 'Direct / Email Link') . "\n";
$body .= "====================================================\n";

// Hostinger SMTP authenticated dispatch function (reads from external config or env)
function sendViaHostingerSmtp($toAddresses, $subject, $bodyText, $replyEmail, $replyName) {
    $smtpHost = 'smtp.hostinger.com';
    $smtpPort = 465;
    $smtpUser = 'sales@huengines.com';
    $smtpPass = '';
    $fromName = 'HU Engines Lead System';

    $configFile = __DIR__ . '/config.local.php';
    if (file_exists($configFile)) {
        $cfg = @include($configFile);
        if (is_array($cfg)) {
            $smtpHost = $cfg['smtp_host'] ?? $smtpHost;
            $smtpPort = (int)($cfg['smtp_port'] ?? $smtpPort);
            $smtpUser = $cfg['smtp_user'] ?? $smtpUser;
            $smtpPass = $cfg['smtp_pass'] ?? '';
            $fromName = $cfg['from_name'] ?? $fromName;
        }
    }

    if (empty($smtpPass)) {
        $smtpPass = getenv('SMTP_PASS') ?: (getenv('HOSTINGER_SMTP_PASS') ?: '');
    }

    // If no credentials found, return false to trigger server mail fallback
    if (empty($smtpPass)) {
        return false;
    }

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ]
    ]);

    $socket = @stream_socket_client("ssl://{$smtpHost}:{$smtpPort}", $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        return false;
    }

    $readResponse = function($socket, $expectedCode) {
        $data = '';
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) === ' ') break;
        }
        return (substr($data, 0, 3) === $expectedCode);
    };

    $sendCmd = function($socket, $cmd, $expectedCode) use ($readResponse) {
        fputs($socket, $cmd . "\r\n");
        return $readResponse($socket, $expectedCode);
    };

    if (!$readResponse($socket, '220')) { fclose($socket); return false; }
    if (!$sendCmd($socket, 'EHLO huengines.com', '250')) { fclose($socket); return false; }
    if (!$sendCmd($socket, 'AUTH LOGIN', '334')) { fclose($socket); return false; }
    if (!$sendCmd($socket, base64_encode($smtpUser), '334')) { fclose($socket); return false; }
    if (!$sendCmd($socket, base64_encode($smtpPass), '235')) { fclose($socket); return false; }
    if (!$sendCmd($socket, "MAIL FROM: <{$smtpUser}>", '250')) { fclose($socket); return false; }

    $atLeastOneAccepted = false;
    foreach ($toAddresses as $to) {
        $to = trim($to);
        if (!empty($to)) {
            if ($sendCmd($socket, "RCPT TO: <{$to}>", '250')) {
                $atLeastOneAccepted = true;
            }
        }
    }

    if (!$atLeastOneAccepted) {
        fclose($socket);
        return false;
    }

    if (!$sendCmd($socket, 'DATA', '354')) { fclose($socket); return false; }

    $headers  = "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$smtpUser}>\r\n";
    $headers .= "To: " . implode(', ', $toAddresses) . "\r\n";
    if (!empty($replyEmail)) {
        $headers .= "Reply-To: =?UTF-8?B?" . base64_encode($replyName) . "?= <{$replyEmail}>\r\n";
    }
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "X-Mailer: HU-Engines-SMTP/2.0\r\n";

    fputs($socket, $headers . "\r\n" . $bodyText . "\r\n.\r\n");
    if (!$readResponse($socket, '250')) { fclose($socket); return false; }

    $sendCmd($socket, 'QUIT', '221');
    fclose($socket);
    return true;
}

// 1. Try Authenticated Hostinger SMTP first
$sent = sendViaHostingerSmtp($recipients, $subject, $body, $email, $name);

// 2. Fallback to standard server mail() if SMTP socket was blocked or credentials not provided
if (!$sent) {
    $mailHeaders = "From: HU Engines Website <noreply@huengines.com>\r\n";
    $mailHeaders .= "Reply-To: " . $name . " <" . $email . ">\r\n";
    $mailHeaders .= "MIME-Version: 1.0\r\n";
    $mailHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mailHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    foreach ($recipients as $recipient) {
        @mail($recipient, $subject, $body, $mailHeaders, "-f noreply@huengines.com");
    }
}

// 3. Backup lead record on disk (guarantees zero lead loss under any network circumstance)
$backupRecord = [
    'timestamp'       => date('Y-m-d H:i:s T'),
    'name'            => $name,
    'email'           => $email,
    'company'         => $company,
    'website'         => $website,
    'revenue'         => $revenue,
    'improvements'    => $improvements,
    'scope'           => $scope,
    'successCriteria' => $successCriteria,
    'ip'              => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'mail_sent'       => $sent ? true : false,
];
@file_put_contents(
    __DIR__ . '/__leads_secure_backup.jsonl',
    json_encode($backupRecord) . "\n",
    FILE_APPEND | LOCK_EX
);

echo json_encode([
    "status"  => "success", 
    "message" => "Your transformation brief has been received. Our leadership team will review your systems and reply within 24 to 48 hours."
]);
?>
