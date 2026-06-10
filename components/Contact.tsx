"use client";

import { useState } from "react";

const WA_NUMBER = "919818077956";

type FormData = {
  name: string;
  phone: string;
  intent: string;
  budget: string;
  area: string;
  propertyType: string;
};

const INTENTS = ["Buy", "Rent", "Sell my property", "Just exploring"];
const BUDGETS = ["Under ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹3Cr", "₹3Cr – ₹5Cr", "₹5Cr+"];
const AREAS = ["Defence Colony", "Greater Kailash", "Saket", "South Extension", "Vasant Kunj", "Lajpat Nagar", "New Friends Colony"];
const TYPES = ["Builder Floor", "Apartment", "Villa / House", "Commercial", "Any"];

// ─── Shared primitives ────────────────────────────────────────────────────────

const eyebrowStyle: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: "10px",
  fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px",
};
const eyebrowLine: React.CSSProperties = {
  display: "inline-block", width: "26px", height: "1px",
  background: "#C9A84C", opacity: 0.5,
};
const inputStyle: React.CSSProperties = {
  width: "100%", height: "52px", padding: "0 16px",
  borderRadius: "10px", background: "#fff",
  border: "1.5px solid #E4E2DA", fontSize: "15px",
  color: "#0F1923", fontFamily: "inherit", outline: "none",
  transition: "border-color .2s, box-shadow .2s",
};
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "12px", fontWeight: 600,
  color: "#344054", letterSpacing: "0.04em",
  textTransform: "uppercase", marginBottom: "10px",
};

// ─── Chip component ───────────────────────────────────────────────────────────

function Chip({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "9px 18px", borderRadius: "8px", cursor: "pointer",
        fontSize: "13px", fontWeight: selected ? 600 : 500,
        fontFamily: "inherit",
        border: selected ? "1.5px solid #C9A84C" : "1.5px solid #E4E2DA",
        background: selected ? "#FFFBF0" : "#fff",
        color: selected ? "#0F1923" : "#475467",
        transition: "all .2s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────

function StepBar({ current }: { current: number }) {
  const steps = ["You", "Requirement", "Confirm"];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: "40px" }}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 600, flexShrink: 0,
                  background: done ? "#C9A84C" : active ? "#0F1923" : "#F4F2EE",
                  color: done ? "#0F1923" : active ? "#C9A84C" : "#9AA5B4",
                  transition: "all .2s",
                }}
              >
                {done ? "✓" : i + 1}
              </div>
              <span
                style={{
                  fontSize: "12px", fontWeight: 500,
                  color: active ? "#0F1923" : "#B0BAC7",
                  transition: "color .2s",
                }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: "40px", height: "1px", background: "#ECE7DF", margin: "0 8px" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Nav row ──────────────────────────────────────────────────────────────────

function NavRow({ onBack, onNext, nextLabel = "Continue", showBack = true }: {
  onBack?: () => void; onNext: () => void;
  nextLabel?: string; showBack?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "28px", paddingTop: "24px", borderTop: "1px solid #ECE7DF" }}>
      {showBack ? (
        <button type="button" onClick={onBack}
          style={{ background: "transparent", border: "1.5px solid #E4E2DA", color: "#667085", fontSize: "13px", fontWeight: 500, padding: "11px 20px", borderRadius: "9px", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}>
          ← Back
        </button>
      ) : <span />}
      <button type="button" onClick={onNext}
        style={{ background: "#0F1923", color: "#C9A84C", fontSize: "14px", fontWeight: 600, padding: "13px 28px", borderRadius: "9px", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "7px", letterSpacing: "0.01em", transition: "background .2s" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#1a2d3f")}
        onMouseLeave={e => (e.currentTarget.style.background = "#0F1923")}
      >
        {nextLabel}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    name: "", phone: "",
    intent: "Buy", budget: "₹1Cr – ₹3Cr",
    area: "Greater Kailash", propertyType: "Builder Floor",
  });

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const cardStyle: React.CSSProperties = {
    background: "#FAFAF8", border: "1px solid #ECE7DF",
    borderRadius: "16px", padding: "36px 32px",
  };

  const fieldGroupStyle: React.CSSProperties = {
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
  };

  const summaryRow = (key: string, val: string) => (
    <div key={key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#fff", border: "1px solid #ECE7DF", borderRadius: "10px" }}>
      <span style={{ fontSize: "12px", color: "#9AA5B4", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{key}</span>
      <span style={{ fontSize: "14px", color: "#0F1923", fontWeight: 600 }}>{val || "—"}</span>
    </div>
  );

  const handleSubmit = () => {
    const msg = `🏡 New Property Enquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nLooking to: ${form.intent}\nBudget: ${form.budget}\nLocation: ${form.area}\nType: ${form.propertyType}\n\nSource: Website`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" style={{ background: "#FFFFFF", paddingTop: "88px", paddingBottom: "88px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={eyebrowStyle}>
            <span style={eyebrowLine} />Free Consultation<span style={eyebrowLine} />
          </div>
          <h2 className="font-display" style={{ margin: "0 0 12px", color: "#0F1923", fontSize: "clamp(32px,4vw,46px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Find your perfect property{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>in 2 minutes.</em>
          </h2>
          <p style={{ fontSize: "15px", color: "#667085", lineHeight: 1.65, maxWidth: "460px", margin: "0 auto" }}>
            3 quick questions. We'll send matching verified listings directly on WhatsApp — no spam, no brokerage.
          </p>
        </div>

        <StepBar current={step} />

        {/* Step 1 */}
        {step === 0 && (
          <div style={cardStyle}>
            <p style={{ fontSize: "13px", color: "#9AA5B4", fontWeight: 500, marginBottom: "24px" }}>Step 1 of 3 — Quick intro</p>
            <div style={fieldGroupStyle}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input style={inputStyle} value={form.name} placeholder="Rahul Sharma"
                  onChange={e => set("name", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E4E2DA"; e.target.style.boxShadow = "none"; }} />
              </div>
              <div>
                <label style={labelStyle}>Mobile number</label>
                <input style={inputStyle} value={form.phone} placeholder="+91 98XXX XXXXX" type="tel"
                  onChange={e => set("phone", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E4E2DA"; e.target.style.boxShadow = "none"; }} />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={labelStyle}>You're looking to</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {INTENTS.map(v => <Chip key={v} label={v} selected={form.intent === v} onClick={() => set("intent", v)} />)}
              </div>
            </div>
            <NavRow showBack={false} onNext={() => setStep(1)} />
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div style={cardStyle}>
            <p style={{ fontSize: "13px", color: "#9AA5B4", fontWeight: 500, marginBottom: "24px" }}>Step 2 of 3 — Your requirement</p>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Budget range</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {BUDGETS.map(v => <Chip key={v} label={v} selected={form.budget === v} onClick={() => set("budget", v)} />)}
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Preferred location</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {AREAS.map(v => <Chip key={v} label={v} selected={form.area === v} onClick={() => set("area", v)} />)}
              </div>
            </div>
            <div>
              <label style={labelStyle}>Property type</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {TYPES.map(v => <Chip key={v} label={v} selected={form.propertyType === v} onClick={() => set("propertyType", v)} />)}
              </div>
            </div>
            <NavRow onBack={() => setStep(0)} onNext={() => setStep(2)} nextLabel="Review & Send" />
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div style={cardStyle}>
            <p style={{ fontSize: "13px", color: "#9AA5B4", fontWeight: 500, marginBottom: "24px" }}>Step 3 of 3 — Confirm & send</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {summaryRow("Name", form.name)}
              {summaryRow("Phone", form.phone)}
              {summaryRow("Looking to", form.intent)}
              {summaryRow("Budget", form.budget)}
              {summaryRow("Location", form.area)}
              {summaryRow("Property type", form.propertyType)}
            </div>
            {/* WhatsApp submit */}
            <button type="button" onClick={handleSubmit}
              style={{ width: "100%", background: "#25D366", color: "#fff", fontSize: "15px", fontWeight: 600, padding: "16px", borderRadius: "10px", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", marginBottom: "10px", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1fb85a")}
              onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Send my requirement on WhatsApp
            </button>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
              style={{ width: "100%", background: "#fff", color: "#344054", fontSize: "14px", fontWeight: 500, padding: "14px", borderRadius: "10px", border: "1.5px solid #E4E2DA", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#25D366"; (e.currentTarget as HTMLAnchorElement).style.color = "#25D366"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E4E2DA"; (e.currentTarget as HTMLAnchorElement).style.color = "#344054"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Prefer to chat directly? Open WhatsApp
            </a>
            <div style={{ marginTop: "16px" }}>
              <button type="button" onClick={() => setStep(1)}
                style={{ background: "transparent", border: "none", color: "#9AA5B4", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
                ← Edit answers
              </button>
            </div>
          </div>
        )}

        {/* Trust bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "28px", flexWrap: "wrap" }}>
          {[
            { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Verified listings only" },
            { icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 5v5l4 2", label: "Reply under 10 min" },
            { icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM4.93 4.93l14.14 14.14", label: "Zero spam, ever" },
          ].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "#B0BAC7" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}