"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";

const improvementOptions = [
  { id: "leadengine", label: "LeadEngine & B2B Pipeline" },
  { id: "outbound", label: "Autonomous Acquisition" },
  { id: "revenue", label: "Revenue Infrastructure" },
  { id: "operations", label: "Operations & Workflows" },
  { id: "ai", label: "AI Adoption & Agents" },
  { id: "security", label: "Cybersecurity Systems" },
];

export default function ContactForm() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    revenue: "",
    scope: "",
    successCriteria: "",
  });
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([
    "LeadEngine & B2B Pipeline",
    "Revenue Infrastructure",
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleImprovement = (label: string) => {
    setErrorMsg("");
    setSelectedImprovements((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanCompany = formData.company.trim();
    const cleanWebsite = formData.website.trim();

    if (!cleanName) {
      setErrorMsg("Please enter your name.");
      return;
    }

    if (!cleanEmail) {
      setErrorMsg("Please enter your work email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMsg("Please enter a valid work email address (e.g. name@company.com).");
      return;
    }

    if (!cleanCompany) {
      setErrorMsg("Please enter your company name.");
      return;
    }

    if (selectedImprovements.length === 0) {
      setErrorMsg("Please select at least one core systems focus.");
      return;
    }

    setSubmitting(true);

    const coreFocus = selectedImprovements.join(", ");

    const payload = {
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      website: cleanWebsite || "Not provided",
      system_scale: formData.revenue || "Not specified",
      revenue: formData.revenue || "Not specified",
      core_systems_focus: coreFocus,
      improvements: selectedImprovements,
      scope_of_work: formData.scope.trim() || "Not specified",
      scope: formData.scope.trim() || "Not specified",
      success_criteria: formData.successCriteria.trim() || "Not specified",
      successCriteria: formData.successCriteria.trim() || "Not specified",
      _subject: `⚡ [HU Engines] Client Brief: ${cleanCompany} (${cleanName})`,
      _replyto: cleanEmail,
    };

    let delivered = false;

    // 1. Primary: Dedicated Google Apps Script Web App (Instant Google Sheet log + luxury HTML email)
    if (SITE_CONFIG.formEndpoint) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);

        const res = await fetch(SITE_CONFIG.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (res.ok || res.type === "opaque" || res.status === 200) {
          delivered = true;
        }
      } catch (endpointErr) {
        console.warn("Primary gateway fetch note:", endpointErr);
        // Fallback to no-cors mode if redirect was restricted by browser policy
        try {
          await fetch(SITE_CONFIG.formEndpoint, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(payload),
          });
          delivered = true;
        } catch (noCorsErr) {
          console.warn("no-cors retry note:", noCorsErr);
        }
      }
    }

    // 2. Fallback Gateway if custom endpoint not configured or totally unreachable
    if (!delivered && !SITE_CONFIG.formEndpoint) {
      try {
        const res = await fetch("https://formsubmit.co/ajax/sales@huengines.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _captcha: "false",
            _template: "table",
          }),
        });
        const data = await res.json().catch(() => null);
        if (res.ok && data && (data.success === "true" || data.success === true)) {
          delivered = true;
        }
      } catch (fallbackErr) {
        console.warn("Fallback gateway note:", fallbackErr);
      }
    }

    if (delivered || SITE_CONFIG.formEndpoint) {
      setSubmitted(true);
      setErrorMsg("");
    } else {
      setErrorMsg(
        "Network connection was interrupted. You can click below to transmit your brief directly via your mail client."
      );
    }
    setSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      revenue: "",
      scope: "",
      successCriteria: "",
    });
    setSelectedImprovements([
      "LeadEngine & B2B Pipeline",
      "Revenue Infrastructure",
    ]);
    setSubmitted(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 md:py-40 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Initiate
              </span>
            </div>

            <h2
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-8 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              START A
              <br />
              <span className="text-hu-text-secondary">SYSTEMS AUDIT.</span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base leading-relaxed mb-8 max-w-[460px] transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We partner with organizations where mission-critical systems, institutional
              trust, and predictable acquisition compound enterprise value. Submit your brief
              and our principal engineering team will respond with a systems perspective—not a generic sales pitch.
            </p>

            <div
              className={`space-y-4 text-hu-text-muted text-sm transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hu-accent flex-shrink-0" />
                <span>Bespoke systems tailored for serious enterprise &amp; high-growth operators</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hu-accent flex-shrink-0" />
                <span>Confidential review by our principal engineering team</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hu-accent flex-shrink-0" />
                <span>Direct response within 24 to 48 hours</span>
              </div>
            </div>

            {/* Direct Contact info */}
            <div
              className={`mt-12 pt-8 border-t border-hu-border/60 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="block text-hu-text-muted text-[10px] tracking-[0.2em] uppercase font-mono mb-2">
                Direct Executive Channel
              </span>
              <a
                href="mailto:sales@huengines.com"
                className="text-hu-white hover:text-hu-accent text-sm tracking-wide font-mono transition-colors duration-300 inline-flex items-center gap-2"
              >
                sales@huengines.com
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 1h8v8M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="border border-hu-accent/40 bg-hu-card/40 backdrop-blur-md p-10 md:p-14 text-center animate-fade-in shadow-[0_0_40px_rgba(200,164,110,0.08)]">
                <div className="w-16 h-16 mx-auto border border-hu-accent bg-hu-accent-dim flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(200,164,110,0.25)]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    className="text-hu-accent"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10l4 4 8-8" />
                  </svg>
                </div>
                <span className="inline-block text-hu-accent text-xs font-mono tracking-[0.25em] uppercase mb-2">
                  Transmitted Successfully
                </span>
                <h3 className="text-hu-white text-2xl font-medium mb-3">
                  Brief Received
                </h3>
                <p className="text-hu-text-secondary text-sm leading-relaxed max-w-[480px] mx-auto mb-8">
                  Thank you, <span className="text-hu-white font-medium">{formData.name || "partner"}</span>. A principal architect will examine {formData.company ? <span className="text-hu-white font-medium">{formData.company}&apos;s</span> : "your"} acquisition requirements and reach out to <span className="text-hu-white font-mono text-xs">{formData.email}</span> within 24–48 hours.
                </p>

                {/* Selected areas summary */}
                <div className="bg-hu-black/60 border border-hu-border p-5 text-left mb-8 max-w-[480px] mx-auto">
                  <span className="block text-hu-text-muted text-[10px] tracking-[0.2em] uppercase font-mono mb-2">
                    Scope of Engagement
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedImprovements.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-hu-accent bg-hu-accent-dim border border-hu-accent/30 tracking-wide font-medium"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-hu-accent text-xs tracking-[0.1em] uppercase hover:text-hu-white transition-colors duration-300 cursor-pointer"
                >
                  ← Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-hu-border bg-hu-card/25 p-8 md:p-10 shadow-2xl relative backdrop-blur-sm"
              >
                <div className="space-y-6">
                  {/* Contact Person Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                        Your Name <span className="text-hu-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Morgan"
                        className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 focus:outline-none focus:border-hu-accent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                        Work Email <span className="text-hu-accent">*</span>
                      </label>
                      <input
                        type="text"
                        inputMode="email"
                        name="email"
                        autoComplete="email"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value.trim(),
                          }))
                        }
                        placeholder="alex@enterprise.com"
                        className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 focus:outline-none focus:border-hu-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                        Company Name <span className="text-hu-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 focus:outline-none focus:border-hu-accent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                        Website{" "}
                        <span className="text-hu-text-muted/60 lowercase tracking-normal text-[10px]">
                          (optional — e.g. company.com)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="company.com or leave blank"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 focus:outline-none focus:border-hu-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* What to improve */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase">
                        Core Systems Focus <span className="text-hu-accent">*</span>
                      </label>
                      {selectedImprovements.length > 0 && (
                        <span className="text-[10px] font-mono tracking-wider text-hu-accent uppercase">
                          {selectedImprovements.length} Selected
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {improvementOptions.map((option) => {
                        const isSelected = selectedImprovements.includes(
                          option.label
                        );
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => toggleImprovement(option.label)}
                            className={`group flex items-center justify-between px-3.5 py-3 text-xs tracking-[0.04em] uppercase border transition-all duration-300 text-left cursor-pointer ${
                              isSelected
                                ? "border-hu-accent bg-hu-accent-dim text-hu-accent font-medium shadow-[0_0_15px_rgba(200,164,110,0.12)]"
                                : "border-hu-border bg-hu-black/40 text-hu-text-muted hover:border-hu-border-light hover:text-hu-text-secondary"
                            }`}
                            aria-pressed={isSelected}
                          >
                            <span className="truncate mr-2">{option.label}</span>
                            <div
                              className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? "border-hu-accent bg-hu-accent text-hu-black"
                                  : "border-hu-border group-hover:border-hu-border-light"
                              }`}
                            >
                              {isSelected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M2 6l3 3 5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Scope / Engagement Scale */}
                  <div>
                    <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                      Engagement Scope &amp; System Scale
                    </label>
                    <div className="relative">
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 appearance-none transition-colors duration-300 cursor-pointer focus:outline-none focus:border-hu-accent pr-10"
                      >
                        <option value="" className="bg-hu-darker text-hu-text-muted">
                          Select engagement tier
                        </option>
                        <option value="core-architecture" className="bg-hu-darker text-hu-text">
                          Focused Architecture (Core Acquisition / LeadEngine Deployment)
                        </option>
                        <option value="multi-department" className="bg-hu-darker text-hu-text">
                          Multi-Department System (Pipeline Infrastructure &amp; Automation)
                        </option>
                        <option value="enterprise-transformation" className="bg-hu-darker text-hu-text">
                          Full Enterprise Operating Architecture
                        </option>
                        <option value="strategic-advisory" className="bg-hu-darker text-hu-text">
                          Strategic Advisory &amp; Ongoing Systems Engineering
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-hu-text-muted">
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M1 1l4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Current Bottleneck */}
                  <div>
                    <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                      Current Acquisition Friction or Systems Bottleneck
                    </label>
                    <textarea
                      name="scope"
                      rows={3}
                      value={formData.scope}
                      onChange={handleInputChange}
                      placeholder="e.g. Inconsistent enterprise pipeline, low cold outreach conversion, or reliance on manual SDR workflows"
                      className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 resize-none focus:outline-none focus:border-hu-accent transition-colors duration-300"
                    />
                  </div>

                  {/* Desired Success */}
                  <div>
                    <label className="block text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
                      What does success look like?
                    </label>
                    <textarea
                      name="successCriteria"
                      rows={2}
                      value={formData.successCriteria}
                      onChange={handleInputChange}
                      placeholder="e.g. Predictable pipeline velocity, automated qualification, or verified CXO meetings"
                      className="w-full bg-hu-black/60 border border-hu-border text-hu-text text-sm px-4 py-3 placeholder:text-hu-text-muted/40 resize-none focus:outline-none focus:border-hu-accent transition-colors duration-300"
                    />
                  </div>

                  {/* Error Notification & Email Fallback */}
                  {errorMsg && (
                    <div className="p-4 border border-red-500/40 bg-red-950/20 text-left animate-shake">
                      <p className="text-red-400 text-xs leading-relaxed mb-2 font-medium">
                        {errorMsg}
                      </p>
                      {(errorMsg.includes("mail client") || errorMsg.includes("email directly")) && (
                        <a
                          href={`mailto:sales@huengines.com?cc=ihuz4f@gmail.com&subject=${encodeURIComponent(
                            `⚡ [HU Engines] Client Brief: ${formData.company || "Project Inquiry"} (${formData.name || "Executive"})`
                          )}&body=${encodeURIComponent(
                            `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nWebsite: ${formData.website || "N/A"}\nFocus: ${selectedImprovements.join(", ")}\nScope: ${formData.scope || "N/A"}\nSuccess Criteria: ${formData.successCriteria || "N/A"}`
                          )}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/40 border border-red-500/50 text-red-200 text-xs font-mono uppercase tracking-wider hover:bg-red-800/60 transition-colors"
                        >
                          ✉ Send Brief via Email Client →
                        </a>
                      )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(200,164,110,0.15)]"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-hu-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit for Systems Review</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M3 1h8v8M11 1L1 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-hu-text-muted tracking-wide pt-1">
                    <span>Delivered to sales@huengines.com</span>
                    <span>Response within 24–48h</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
