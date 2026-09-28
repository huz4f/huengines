/**
 * Global Site & Inbound Configuration for HU Engines
 */
export const SITE_CONFIG = {
  name: "HU Engines",
  domain: "huengines.com",
  url: "https://huengines.com",
  salesEmail: "sales@huengines.com",
  backupEmail: "ihuz4f@gmail.com",

  // Google Apps Script Web App Endpoint URL
  // Can be set via NEXT_PUBLIC_FORM_ENDPOINT in environment, or updated here directly.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://script.google.com/macros/s/AKfycbxxj_nj1XfQ0MIEYg2HxqWzlwkZGSP2MtAcgqGcE50QghGtE7OERsEpzJqS8CpkdhfPCg/exec",
};
