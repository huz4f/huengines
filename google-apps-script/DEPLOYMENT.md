# HU Engines — Inbound Gateway (Google Apps Script)

This is the dedicated, serverless inbound lead engine for **HU Engines**. It runs on Google's infrastructure, logs all leads to a Google Sheet forever, and sends high-deliverability executive emails with the HU Engines logo and branding.

---

## ⚡ 60-Second Setup Instructions

### Step 1: Open Google Sheets
1. Go to [sheets.google.com](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Name the spreadsheet: **HU Engines — Inbound Leads**
3. In the top menu, click **Extensions** → **Apps Script**.

---

### Step 2: Paste the Gateway Code
1. Delete any boilerplate code inside the editor (`function myFunction() {}`).
2. Open [`google-apps-script/Code.js`](./Code.js) from this repository, copy its entire contents, and paste it into the Apps Script editor.
3. Click the **Save** icon (diskette icon) or press `Cmd + S` / `Ctrl + S`.
4. Name the Apps Script project: **HU Engines Lead Gateway**

---

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button (top-right) → select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Fill in the deployment settings:
   - **Description**: `Production Inbound Gateway`
   - **Execute as**: `Me (your email)`
   - **Who has access**: **`Anyone`** *(Crucial: This allows your website's contact form to send submissions securely without requiring visitors to sign in)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click **Authorize access** → select your Google account (`ihuz4f@gmail.com`).
   - If Google shows *"Google hasn’t verified this app"*, click **Advanced** (bottom left) → click **Go to HU Engines Lead Gateway (unsafe)**.
   - Click **Allow**.
6. Google will provide a **Web app URL** that looks like:
   ```text
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Copy this **Web app URL**.

---

### Step 4: Add URL to Your Website
Paste your copied URL into:
[`src/config/site.ts`](../src/config/site.ts) in the `formEndpoint` field:

```typescript
export const SITE_CONFIG = {
  // ...
  formEndpoint: "https://script.google.com/macros/s/YOUR_COPIED_ID/exec",
};
```
Or set it as an environment variable in `.env.local`:
```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://script.google.com/macros/s/YOUR_COPIED_ID/exec"
```

Then run `npm run deploy` (or `./deploy.sh`).

---

## 🏆 What Happens When a Client Submits a Brief?

1. **Google Sheet Ingestion**: A new row is immediately appended to the **Inbound Leads** sheet with the timestamp, prospect name, email, company, website, revenue scope, systems focus, bottlenecks, and success criteria.
2. **Executive Brief Email**: A bespoke, dark/gold luxury HTML email is dispatched to `inquiry@huengines.com` and `ihuz4f@gmail.com` with:
   - Full lead dossier
   - HU Engines gold logo
   - One-click `Reply to [Prospect Name]` button
3. **Client Acknowledgment**: The prospective client automatically receives a prestigious confirmation email from HU Engines confirming receipt by the principal architecture team.
