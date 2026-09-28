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

// Handle website input flexibly:
// Accepts "huz4f.com", "ww.huz4f.com", "www.huz4f.com", "https://huz4f.com", or blank / none.
$rawWebsite = trim($input['website'] ?? '');
if (empty($rawWebsite) || in_array(strtolower($rawWebsite), ['n/a', 'none', 'no', 'null', 'nil', '-'])) {
    $website = 'Not provided';
    $displayWebsite = 'Not provided (client has no website or skipped)';
} else {
    $cleaned = $rawWebsite;
    // Fix common typos like ww. -> www.
    if (preg_match('/^ww\.(.+)$/i', $cleaned, $matches)) {
        $cleaned = 'www.' . $matches[1];
    }
    // Add https:// scheme if missing for clean one-click viewing in email
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

// Destination email as requested
$to = "sales@huengine.com";

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

$serverHost = $_SERVER['SERVER_NAME'] ?? 'huengine.com';
$cleanHost = preg_replace('/^www\./i', '', $serverHost);
if (empty($cleanHost) || $cleanHost === 'localhost') {
    $cleanHost = 'huengine.com';
}
$fromAddress = "noreply@" . $cleanHost;

$headers = "From: HU Engines Website <" . $fromAddress . ">\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email with envelope-sender (-f) parameter for reliable deliverability on Hostinger/cPanel
$sent = @mail($to, $subject, $body, $headers, "-f " . $fromAddress);
if (!$sent) {
    // Fallback without 5th parameter if host mail config prevents -f
    $sent = @mail($to, $subject, $body, $headers);
}

// Backup lead storage (ensures no ₹50L+ lead is EVER lost if mail transport has temporary downtime)
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
