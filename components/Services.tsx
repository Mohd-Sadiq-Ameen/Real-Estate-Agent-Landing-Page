"use client";

import { Home, Key, TrendingUp } from "lucide-react";

const services = [
  {
    Icon: Home,
    title: "Buy Property",
    desc: "Access verified South Delhi listings before they hit the market.",
    highlights: ["Builder Floors", "Luxury Homes", "Commercial Spaces", "Verified Listings"],
  },
  {
    Icon: Key,
    title: "Rent Property",
    desc: "Residential and commercial rentals — zero brokerage, quick possession.",
    highlights: ["Residential Rentals", "Office Spaces", "Retail Outlets", "Quick Possession"],
  },
  {
    Icon: TrendingUp,
    title: "Sell Property",
    desc: "Get the right price with our valuation support and active buyer network.",
    highlights: ["Property Valuation", "Buyer Network", "Marketing Support", "Documentation"],
  },
];

const WA_NUMBER = "919818077956";
const WA_MSG = "Hi, I'd like to know more about your services.";

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#FAFAF8",
        paddingTop: "88px",
        paddingBottom: "88px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.5,
            }}
          />
          What we offer
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.5,
            }}
          />
        </div>

        <h2
          className="font-display"
          style={{
            margin: "0 0 10px",
            color: "#0F1923",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          How we can{" "}
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>help you.</em>
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#667085",
            lineHeight: 1.65,
            margin: "0 0 52px",
            maxWidth: "460px",
          }}
        >
          Three ways Royal Siyaram Estate works for you — whether you're
          buying, renting, or ready to sell.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
            background: "#ECE7DF",
            border: "1px solid #ECE7DF",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {services.map(({ Icon, title, desc, highlights }) => (
            <div
              key={title}
              style={{
                background: "#FFFFFF",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#FFFDF7")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#FFFFFF")
              }
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "#FAF8F4",
                  border: "1px solid #ECE7DF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <Icon size={22} color="#C9A84C" />
              </div>

              <h3
                className="font-display"
                style={{
                  margin: "0 0 6px",
                  color: "#0F1923",
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: "#9AA5B4",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                }}
              >
                {desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "auto",
                }}
              >
                {highlights.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#344054",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#C9A84C",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          style={{
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: "1px solid #ECE7DF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#9AA5B4" }}>
            Not sure where to start?
          </span>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#0F1923",
              color: "#25d366",
              fontSize: "13px",
              fontWeight: 600,
              padding: "11px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#1a2d3f")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#0F1923")
            }
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Talk to us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}