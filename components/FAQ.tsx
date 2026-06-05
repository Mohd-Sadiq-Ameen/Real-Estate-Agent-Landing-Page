"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I know if a property is fairly priced?",
    a: "We provide a detailed market analysis and recent transaction comparables from the same neighbourhood. Our team also offers professional valuation services so you can make an informed decision.",
  },
  {
    q: "Do you only work with luxury properties?",
    a: "While we specialise in premium builder floors and luxury homes, we also assist with mid‑segment residential and commercial properties. Every client receives the same level of dedicated service.",
  },
  {
    q: "What are your charges for buyers?",
    a: "Our buyer advisory service is completely free. We get compensated by the seller or builder, so you pay no commission when you purchase a property through us.",
  },
  {
    q: "How long does it typically take to find a rental property?",
    a: "Most clients find a suitable rental within 7–14 days. We share only verified listings, schedule site visits, and help with lease documentation.",
  },
  {
    q: "Do you handle legal paperwork and registration?",
    a: "Yes. We have empanelled lawyers who verify title deeds, draft sale agreements, and oversee the registration process. Our goal is a completely transparent and legally sound transaction.",
  },
];

export default function FAQ() {
  // 🔧 FIX: changed initial state from 0 to null → all closed initially
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: "#FAFAF7",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: "#C9A84C",
              fontSize: "0.75rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Before You Decide
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "normal",
              color: "#0F1923",
              lineHeight: "0.95",
              marginBottom: "2rem",
            }}
          >
            Common Concerns
          </h2>
          <p
            style={{
              maxWidth: "780px",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              fontSize: "clamp(1rem, 4vw, 1.25rem)",
              lineHeight: "1.9",
              color: "#475467",
            }}
          >
            Clear answers to the most common questions about buying, selling and renting in South Delhi.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "896px", width: "100%" }}>
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1.5rem",
                  borderRadius: "1.5rem",
                  backgroundColor: "white",
                  border: `1px solid ${
                    openIndex === i ? "#C9A84C" : "#ECE8E1"
                  }`,
                  boxShadow: openIndex === i ? "0 10px 25px -5px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  style={{
                    width: "100%",
                    padding: "2rem 2.5rem",
                    textAlign: "center",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        maxWidth: "750px",
                        fontSize: "clamp(1rem, 4vw, 1.25rem)",
                        fontWeight: "500",
                        color: "#0F1923",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {f.q}
                    </h3>
                    <span
                      style={{
                        color: "#C9A84C",
                        fontSize: "1.875rem",
                        lineHeight: "1",
                        fontWeight: "300",
                      }}
                    >
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {openIndex === i && (
                  <div
                    style={{
                      borderTop: "1px solid #F1EEE8",
                      padding: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        maxWidth: "750px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        fontSize: "clamp(0.875rem, 3vw, 1rem)",
                        lineHeight: "1.9",
                        color: "#6B6258",
                      }}
                    >
                      {f.a}
                    </p>
                    <div style={{ marginTop: "2rem", textAlign: "center" }}>
                      <a
                        href="https://wa.me/919818077956"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                          color: "#C9A84C",
                          fontWeight: "600",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#B0892A")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A84C")}
                      >
                        Ask About Your Situation →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}