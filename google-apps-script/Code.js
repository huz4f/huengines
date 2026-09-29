/**
 * =========================================================================
 * HU ENGINES — ENTERPRISE INBOUND GATEWAY & LEAD SYSTEM
 * Google Apps Script Web App
 * 
 * Functions:
 * 1. doPost(e): Ingests inbound client briefs from huengines.com/contact
 * 2. Appends lead to Google Sheet ("Inbound Leads")
 * 3. Sends luxury executive brief email with logo to inquiry@huengines.com & ihuz4f@gmail.com
 * 4. Sends professional confirmation email with logo to the prospective client
 * 5. Returns JSON response to client
 * =========================================================================
 */

// Core Configuration
var CONFIG = {
  NOTIFICATION_RECIPIENTS: "inquiry@huengines.com, ihuz4f@gmail.com",
  BRAND_NAME: "HU Engines",
  BRAND_URL: "https://huengines.com",
  LOGO_URL: "https://huengines.com/hu-mark-gold.png",
  SHEET_NAME: "Inbound Leads",
  TIMEZONE: "GMT+5:30"
};

/**
 * Handle incoming POST request from huengines.com
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  try {
    lock.waitLock(10000);
  } catch (lockErr) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server busy. Please try again."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var raw = e && e.postData ? e.postData.contents : "";
    var data = {};
    if (raw) {
      try {
        data = JSON.parse(raw);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Clean and validate fields
    var name = String(data.name || "").trim();
    var email = String(data.email || "").trim();
    var company = String(data.company || "").trim();
    var website = String(data.website || "Not provided").trim();
    var revenue = String(data.revenue || data.system_scale || "Not specified").trim();
    var scope = String(data.scope || data.scope_of_work || "Not specified").trim();
    var successCriteria = String(data.successCriteria || data.success_criteria || "Not specified").trim();
    
    // Normalize focus areas
    var focusAreas = "";
    if (Array.isArray(data.improvements)) {
      focusAreas = data.improvements.join(", ");
    } else if (data.core_systems_focus) {
      focusAreas = String(data.core_systems_focus);
    } else if (data.improvements) {
      focusAreas = String(data.improvements);
    } else {
      focusAreas = "LeadEngine & B2B Pipeline, Revenue Infrastructure";
    }

    var now = new Date();
    var timestampStr = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss") + " IST";

    var leadPayload = {
      name: name || "Anonymous Lead",
      email: email || "unknown@domain.com",
      company: company || "Not specified",
      website: website,
      revenue: revenue,
      focusAreas: focusAreas,
      scope: scope,
      successCriteria: successCriteria,
      timestamp: timestampStr
    };

    // 1. Record lead into Google Sheet
    try {
      recordLeadInSheet(leadPayload);
    } catch (sheetError) {
      Logger.log("Sheet record failed: " + sheetError.toString());
    }

    // 2. Dispatch executive notification email to HU Engines leadership
    try {
      sendExecutiveEmail(leadPayload);
    } catch (mailError) {
      Logger.log("Executive email failed: " + mailError.toString());
    }

    // 3. Send professional confirmation to the prospective client
    if (email && email.indexOf("@") !== -1) {
      try {
        sendClientConfirmationEmail(leadPayload);
      } catch (confirmError) {
        Logger.log("Client confirmation email failed: " + confirmError.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead brief successfully recorded and routed."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Fatal doPost error: " + err.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle GET requests for health check
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "HU Engines Inbound Lead Gateway",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Record lead in spreadsheet
 */
function recordLeadInSheet(lead) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;

  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    var headers = [
      "Timestamp",
      "Full Name",
      "Work Email",
      "Company",
      "Website",
      "Engagement Tier / Scale",
      "Core Systems Focus",
      "Bottlenecks / Scope",
      "Success Criteria",
      "Status"
    ];
    sheet.appendRow(headers);

    // Format header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0c0d0e");
    headerRange.setFontColor("#c8a46e");
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(10);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    lead.timestamp,
    lead.name,
    lead.email,
    lead.company,
    lead.website,
    lead.revenue,
    lead.focusAreas,
    lead.scope,
    lead.successCriteria,
    "NEW BRIEF"
  ]);

  try {
    sheet.autoResizeColumns(1, 10);
  } catch (e) {}
}

/**
 * Send luxury executive notification to HU Engines leadership
 */
function sendExecutiveEmail(lead) {
  var subject = "⚡ [Executive Brief] " + lead.company + " — " + lead.name;

  var replySubject = encodeURIComponent("Re: HU Engines Systems Audit — " + lead.company);
  var mailtoReply = "mailto:" + lead.email + "?subject=" + replySubject;

  var html = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>Executive Client Brief</title>',
    '</head>',
    '<body style="margin:0; padding:30px 10px; background-color:#070809; font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif; color:#f0f2f5;">',
    '  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; margin:0 auto; background-color:#0d0e12; border:1px solid #23262f; border-collapse:collapse;">',
    
    // Top Gold Accent Bar
    '    <tr>',
    '      <td style="height:3px; background-color:#c8a46e; font-size:0; line-height:0;">&nbsp;</td>',
    '    </tr>',
    
    // Header
    '    <tr>',
    '      <td style="padding:32px 36px 24px 36px; border-bottom:1px solid #1c1f26;">',
    '        <table width="100%" border="0" cellpadding="0" cellspacing="0">',
    '          <tr>',
    '            <td>',
    '              <div style="font-size:10px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:#c8a46e; margin-bottom:6px;">Inbound Brief // Priority Client</div>',
    '              <h1 style="margin:0; font-size:22px; font-weight:600; letter-spacing:-0.02em; color:#ffffff;">New Systems Transformation Brief</h1>',
    '            </td>',
    '            <td align="right" valign="top" style="width:48px;">',
    '              <img src="' + CONFIG.LOGO_URL + '" alt="HU Engines" width="40" height="40" style="display:block; border:0;" />',
    '            </td>',
    '          </tr>',
    '        </table>',
    '      </td>',
    '    </tr>',

    // Prospect Overview Grid
    '    <tr>',
    '      <td style="padding:28px 36px;">',
    '        <div style="font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:#8a8f98; margin-bottom:16px;">Prospect Dossier</div>',
    '        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #1c1f26; background-color:#090a0d;">',
    
    '          <tr>',
    '            <td style="padding:12px 16px; width:35%; font-size:12px; color:#8a8f98; border-bottom:1px solid #1c1f26; text-transform:uppercase; letter-spacing:0.05em;">Contact Name</td>',
    '            <td style="padding:12px 16px; font-size:14px; font-weight:600; color:#ffffff; border-bottom:1px solid #1c1f26;">' + lead.name + '</td>',
    '          </tr>',
    
    '          <tr>',
    '            <td style="padding:12px 16px; font-size:12px; color:#8a8f98; border-bottom:1px solid #1c1f26; text-transform:uppercase; letter-spacing:0.05em;">Work Email</td>',
    '            <td style="padding:12px 16px; font-size:13px; font-family:monospace; color:#c8a46e; border-bottom:1px solid #1c1f26;"><a href="' + mailtoReply + '" style="color:#c8a46e; text-decoration:none;">' + lead.email + '</a></td>',
    '          </tr>',

    '          <tr>',
    '            <td style="padding:12px 16px; font-size:12px; color:#8a8f98; border-bottom:1px solid #1c1f26; text-transform:uppercase; letter-spacing:0.05em;">Company</td>',
    '            <td style="padding:12px 16px; font-size:14px; font-weight:600; color:#ffffff; border-bottom:1px solid #1c1f26;">' + lead.company + '</td>',
    '          </tr>',

    '          <tr>',
    '            <td style="padding:12px 16px; font-size:12px; color:#8a8f98; border-bottom:1px solid #1c1f26; text-transform:uppercase; letter-spacing:0.05em;">Website</td>',
    '            <td style="padding:12px 16px; font-size:13px; color:#cfd3dc; border-bottom:1px solid #1c1f26;">' + lead.website + '</td>',
    '          </tr>',

    '          <tr>',
    '            <td style="padding:12px 16px; font-size:12px; color:#8a8f98; text-transform:uppercase; letter-spacing:0.05em;">Engagement Scale</td>',
    '            <td style="padding:12px 16px; font-size:13px; color:#c8a46e; font-weight:500;">' + lead.revenue + '</td>',
    '          </tr>',

    '        </table>',
    '      </td>',
    '    </tr>',

    // Focus Areas Section
    '    <tr>',
    '      <td style="padding:0 36px 24px 36px;">',
    '        <div style="font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:#8a8f98; margin-bottom:12px;">Core Systems Focus</div>',
    '        <div style="padding:14px 18px; background-color:#13151b; border-left:3px solid #c8a46e; font-size:13px; color:#ffffff; line-height:1.5;">' + lead.focusAreas + '</div>',
    '      </td>',
    '    </tr>',

    // Scope & Bottleneck Section
    '    <tr>',
    '      <td style="padding:0 36px 24px 36px;">',
    '        <div style="font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:#8a8f98; margin-bottom:12px;">Current Friction / Systems Bottleneck</div>',
    '        <div style="padding:16px 18px; background-color:#090a0d; border:1px solid #1c1f26; font-size:13px; color:#d2d6df; line-height:1.6; white-space:pre-wrap;">' + lead.scope + '</div>',
    '      </td>',
    '    </tr>',

    // Success Outcomes Section
    '    <tr>',
    '      <td style="padding:0 36px 32px 36px;">',
    '        <div style="font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:#8a8f98; margin-bottom:12px;">Desired Success Outcomes</div>',
    '        <div style="padding:16px 18px; background-color:#090a0d; border:1px solid #1c1f26; font-size:13px; color:#d2d6df; line-height:1.6; white-space:pre-wrap;">' + lead.successCriteria + '</div>',
    '      </td>',
    '    </tr>',

    // Action CTA Button
    '    <tr>',
    '      <td style="padding:0 36px 36px 36px; text-align:center;">',
    '        <a href="' + mailtoReply + '" style="display:inline-block; padding:14px 32px; background-color:#c8a46e; color:#0c0d0e; font-size:12px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; text-decoration:none; border-radius:1px;">Reply to ' + lead.name + ' Directly &rarr;</a>',
    '      </td>',
    '    </tr>',

    // Executive Footer with Logo
    '    <tr>',
    '      <td style="padding:28px 36px; background-color:#090a0d; border-top:1px solid #1c1f26; text-align:center;">',
    '        <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto 16px auto;">',
    '          <tr>',
    '            <td style="padding-right:12px; vertical-align:middle;">',
    '              <img src="' + CONFIG.LOGO_URL + '" alt="HU Engines Logo" width="28" height="28" style="display:block; border:0;" />',
    '            </td>',
    '            <td style="vertical-align:middle; text-align:left;">',
    '              <div style="font-size:12px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:#ffffff;">HU ENGINES</div>',
    '              <div style="font-size:10px; color:#8a8f98; letter-spacing:0.05em;">Autonomous Enterprise Systems &amp; Acquisition</div>',
    '            </td>',
    '          </tr>',
    '        </table>',
    '        <div style="font-size:11px; color:#60656f; line-height:1.5; max-width:440px; margin:0 auto;">',
    '          Logged at ' + lead.timestamp + ' &bull; Direct submission via huengines.com<br/>',
    '          Confidential client evaluation brief. Disclose only to authorized HU Engines principals.',
    '        </div>',
    '      </td>',
    '    </tr>',

    '  </table>',
    '</body>',
    '</html>'
  ].join('');

  var plainText = [
    '⚡ [HU ENGINES] EXECUTIVE CLIENT BRIEF',
    '====================================================',
    'Contact: ' + lead.name,
    'Email: ' + lead.email,
    'Company: ' + lead.company,
    'Website: ' + lead.website,
    'Engagement Tier: ' + lead.revenue,
    '',
    'Core Focus: ' + lead.focusAreas,
    '',
    'Current Bottlenecks: ' + lead.scope,
    '',
    'Success Outcomes: ' + lead.successCriteria,
    '',
    'Timestamp: ' + lead.timestamp,
    '====================================================',
    'HU Engines | Autonomous Enterprise Architecture'
  ].join('\n');

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_RECIPIENTS,
    replyTo: lead.email,
    subject: subject,
    body: plainText,
    htmlBody: html,
    name: "HU Engines Inbound System"
  });
}

/**
 * Send executive acknowledgment confirmation to the prospective client
 */
function sendClientConfirmationEmail(lead) {
  var subject = "Brief Received — HU Engines Systems Architecture (" + lead.company + ")";

  var html = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="margin:0; padding:30px 10px; background-color:#070809; font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif; color:#f0f2f5;">',
    '  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:0 auto; background-color:#0d0e12; border:1px solid #23262f; border-collapse:collapse;">',
    
    // Gold Accent Line
    '    <tr><td style="height:3px; background-color:#c8a46e; font-size:0; line-height:0;">&nbsp;</td></tr>',

    // Header
    '    <tr>',
    '      <td style="padding:36px 36px 24px 36px;">',
    '        <table width="100%" border="0" cellpadding="0" cellspacing="0">',
    '          <tr>',
    '            <td>',
    '              <div style="font-size:10px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:#c8a46e; margin-bottom:6px;">Transmission Confirmed</div>',
    '              <h1 style="margin:0; font-size:20px; font-weight:600; color:#ffffff;">Systems Brief Acknowledged</h1>',
    '            </td>',
    '            <td align="right" valign="top" style="width:40px;">',
    '              <img src="' + CONFIG.LOGO_URL + '" alt="HU Engines" width="36" height="36" style="display:block; border:0;" />',
    '            </td>',
    '          </tr>',
    '        </table>',
    '      </td>',
    '    </tr>',

    // Body Letter
    '    <tr>',
    '      <td style="padding:0 36px 28px 36px; font-size:14px; line-height:1.7; color:#cfd3dc;">',
    '        <p style="margin:0 0 16px 0;">Dear ' + lead.name + ',</p>',
    '        <p style="margin:0 0 16px 0;">Thank you for submitting your systems inquiry on behalf of <strong style="color:#ffffff;">' + lead.company + '</strong>.</p>',
    '        <p style="margin:0 0 16px 0;">Your brief has been routed directly to our principal systems architecture team. We review every prospective engagement through an engineering perspective—assessing pipeline mechanics, unit economics, and operational bottlenecks.</p>',
    '        <p style="margin:0 0 24px 0;">A partner will follow up directly at <strong style="color:#c8a46e;">' + lead.email + '</strong> within 24 to 48 business hours with an initial evaluation.</p>',
    
    // Engagement Summary Callout
    '        <div style="padding:16px 20px; background-color:#090a0d; border:1px solid #1c1f26; margin-bottom:24px;">',
    '          <div style="font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#8a8f98; margin-bottom:8px;">Scope of Submission</div>',
    '          <div style="font-size:13px; color:#ffffff;">' + lead.focusAreas + '</div>',
    '        </div>',

    '        <p style="margin:0; color:#8a8f98; font-size:13px;">If you have immediate supplemental architectural documentation or decks to share, reply directly to this email.</p>',
    '      </td>',
    '    </tr>',

    // Signature with Logo
    '    <tr>',
    '      <td style="padding:28px 36px; background-color:#090a0d; border-top:1px solid #1c1f26;">',
    '        <table border="0" cellpadding="0" cellspacing="0">',
    '          <tr>',
    '            <td style="padding-right:14px; vertical-align:middle;">',
    '              <img src="' + CONFIG.LOGO_URL + '" alt="HU Engines" width="32" height="32" style="display:block; border:0;" />',
    '            </td>',
    '            <td style="vertical-align:middle;">',
    '              <div style="font-size:12px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:#ffffff;">HU ENGINES</div>',
    '              <div style="font-size:11px; color:#8a8f98;">Principal Systems Architecture &bull; <a href="' + CONFIG.BRAND_URL + '" style="color:#c8a46e; text-decoration:none;">huengines.com</a></div>',
    '            </td>',
    '          </tr>',
    '        </table>',
    '      </td>',
    '    </tr>',

    '  </table>',
    '</body>',
    '</html>'
  ].join('');

  var plainText = [
    'Dear ' + lead.name + ',',
    '',
    'Thank you for submitting your systems inquiry on behalf of ' + lead.company + '.',
    '',
    'Your brief has been routed directly to our principal systems architecture team.',
    'A partner will follow up directly at ' + lead.email + ' within 24 to 48 business hours with an initial technical perspective.',
    '',
    'Respectfully,',
    'Principal Systems Architecture',
    'HU Engines | inquiry@huengines.com | huengines.com'
  ].join('\n');

  MailApp.sendEmail({
    to: lead.email,
    replyTo: "inquiry@huengines.com",
    subject: subject,
    body: plainText,
    htmlBody: html,
    name: "HU Engines"
  });
}
