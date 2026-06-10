"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin, Bed, Bath, Square, Phone, MessageCircle,
  Car, Building, Star, ChevronDown, CheckCircle2,
  Zap, Droplets, Shield, PawPrint,
} from "lucide-react";
import { properties } from "../../data/properties";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

const StarRating = ({ n = 5 }: { n?: number }) => (
  <span className="rse-stars">
    {[...Array(n)].map((_, i) => (
      <Star key={i} />
    ))}
  </span>
);

const EnergyBadge = ({ rating }: { rating: string }) => {
  const levels = ["G", "F", "E", "D", "C", "B", "A", "A+"];
  const score = levels.indexOf(rating) / (levels.length - 1);
  const hue = Math.round(score * 120); // red→green
  return (
    <span
      className="rse-energy-badge"
      style={{ background: `hsl(${hue},70%,42%)` }}
    >
      {rating}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

type Props = { params: Promise<{ slug: string }> };

export default function PropertyPage({ params }: Props) {
  const { slug } = use(params);
  const property = properties.find((p) => p.slug === slug);
  if (!property) return notFound();

  const ext = {
    propertyId: "5923",
    featured: true,
    parking: 3,
    propertyAge: "Brand New",
    carpetArea: property.sqft - 400,
    balcony: 3,
    floorNumber: "2nd Floor",
    facing: "North-East",
    lifts: "Available",
    ownership: "Freehold",
    flooring: "Marble",
    waterSource: "24×7 Municipal",
    gatedCommunity: true,
    powerBackup: "24×7",
    petFriendly: true,
    semiFurnishedItems: ["AC (×7)", "Lights", "Fans", "Wardrobes"],
    energyClass: "A+",
  };

  const images = [property.image, ...(property.gallery ?? [])];

  const waMsg = encodeURIComponent(
    `Hi, I'm interested in ${property.title} at ${property.location}. Price: ${property.price}. Please share more details.`
  );

  return (
    <main className="rse-root">
      <style jsx global>{`
        /* ── TOKENS ── */
        :root {
          --gold: #C9A84C;
          --gold-dim: #a88630;
          --ink: #0A0A0A;
          --muted: #6B7280;
          --surface: #F7F5F0;
          --border: #E8E4DC;
          --white: #FFFFFF;
          --navy: #1A1A2E;
          --green-wa: #25D366;
          --green-wa-hover: #1ebe5d;
          --radius-sm: 8px;
          --radius-md: 14px;
          --radius-lg: 20px;
        }

        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT ── */
        .rse-root {
          background: var(--white);
          color: var(--ink);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        /* ════════════════════════════════════════
           HERO
        ════════════════════════════════════════ */
        .rse-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          overflow: hidden;
        }
        .rse-hero img { object-fit: cover; }

        .rse-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.55) 55%,
            rgba(0,0,0,0.88) 100%
          );
        }

        .rse-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 60px 64px;
          max-width: 780px;
        }

        .rse-badge-row { display: flex; gap: 8px; margin-bottom: 16px; }
        .rse-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
        }
        .rse-badge-type { background: var(--gold); color: #000; }
        .rse-badge-featured { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.3); }

        .rse-hero h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .rse-hero-loc {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
          margin-bottom: 24px;
        }
        .rse-hero-loc svg { flex-shrink: 0; }

        .rse-hero-price {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 32px;
        }

        .rse-hero-btns { display: flex; gap: 14px; }

        /* ════════════════════════════════════════
           LAYOUT
        ════════════════════════════════════════ */
        .rse-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 0;
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 32px 80px;
          align-items: start;
        }

        .rse-main { padding-right: 56px; }

        /* ════════════════════════════════════════
           STICKY CARD
        ════════════════════════════════════════ */
        .rse-card-wrap {
          position: sticky;
          top: 28px;
        }

        .rse-contact-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
        }

        .rse-card-price {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }
        .rse-card-price-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--muted);
          margin-top: 4px;
          margin-bottom: 20px;
        }

        .rse-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 15px 20px;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.18s ease;
          cursor: pointer;
          border: none;
        }
        .rse-btn + .rse-btn { margin-top: 10px; }

        .rse-btn-wa {
          background: var(--green-wa);
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .rse-btn-wa:hover { background: var(--green-wa-hover); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(37,211,102,0.35); }
        .rse-btn-wa::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, transparent 70%);
          animation: rse-pulse 2.4s ease-in-out infinite;
        }
        @keyframes rse-pulse {
          0%,100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .rse-btn-call {
          background: var(--navy);
          color: #fff;
        }
        .rse-btn-call:hover { background: #252542; transform: translateY(-1px); }

        .rse-btn-outline {
          background: transparent;
          color: var(--ink);
          border: 1.5px solid var(--border);
          margin-top: 10px;
        }
        .rse-btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        .rse-card-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 20px 0;
        }

        .rse-card-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .rse-card-stat {
          background: var(--surface);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
        }
        .rse-card-stat-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ink);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rse-card-stat-lbl {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--muted);
          margin-top: 2px;
        }

        .rse-trust {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          font-size: 0.8rem;
          color: var(--muted);
          justify-content: center;
        }
        .rse-trust svg { color: var(--gold); flex-shrink: 0; }

        /* ════════════════════════════════════════
           SECTIONS
        ════════════════════════════════════════ */
        .rse-section { margin-top: 48px; }
        .rse-section:first-child { margin-top: 0; }

        .rse-section-head {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .rse-section-head::after {
          content: '';
          flex: 1;
          height: 1.5px;
          background: var(--border);
          display: block;
        }

        /* Quick stats bar */
        .rse-quick-stats {
          display: flex;
          gap: 0;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .rse-qs {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 12px;
          gap: 4px;
          border-right: 1px solid var(--border);
        }
        .rse-qs:last-child { border-right: none; }
        .rse-qs svg { color: var(--gold); }
        .rse-qs-val { font-size: 1.25rem; font-weight: 800; line-height: 1; margin-top: 2px; }
        .rse-qs-lbl { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--muted); }

        /* Details table */
        .rse-table {
          width: 100%;
          border-collapse: collapse;
        }
        .rse-table tr { border-bottom: 1px solid var(--border); }
        .rse-table tr:last-child { border-bottom: none; }
        .rse-table td { padding: 12px 4px; font-size: 0.925rem; }
        .rse-table td:first-child { color: var(--muted); width: 50%; }
        .rse-table td:last-child { font-weight: 600; color: var(--ink); }

        /* Two-column table layout */
        .rse-table-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 32px;
        }

        /* Description */
        .rse-desc {
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
        }
        .rse-desc p + p { margin-top: 14px; }

        /* Tags */
        .rse-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .rse-tag {
          background: var(--surface);
          color: var(--ink);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .rse-tag-highlight {
          background: #FFF9EE;
          border-color: var(--gold);
          color: #7a5c10;
        }

        /* Score row */
        .rse-score-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.925rem;
        }
        .rse-score-row:last-child { border-bottom: none; }
        .rse-score-label { color: var(--muted); width: 140px; flex-shrink: 0; }

        .rse-stars { display: flex; gap: 3px; }
        .rse-stars svg {
          width: 18px; height: 18px;
          fill: var(--gold);
          color: var(--gold);
        }

        .rse-energy-badge {
          display: inline-block;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 6px;
          letter-spacing: 0.5px;
        }

        /* Gallery */
        .rse-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 12px;
        }
        .rse-gallery-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--surface);
        }
        .rse-gallery-item:first-child {
          grid-column: 1 / -1;
          height: 400px;
        }
        .rse-gallery-item:not(:first-child) { height: 240px; }
        .rse-gallery-item img { transition: transform 0.4s ease; }
        .rse-gallery-item:hover img { transform: scale(1.03); }

        /* ════════════════════════════════════════
           BACK LINK
        ════════════════════════════════════════ */
        .rse-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gold);
          text-decoration: none;
          margin-top: 48px;
          transition: gap 0.15s;
        }
        .rse-back:hover { gap: 12px; }

        /* ════════════════════════════════════════
           HERO BUTTON (small)
        ════════════════════════════════════════ */
        .rse-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 22px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.18s ease;
        }
        .rse-hero-btn-wa { background: var(--green-wa); color: #fff; }
        .rse-hero-btn-wa:hover { background: var(--green-wa-hover); }
        .rse-hero-btn-call { background: rgba(255,255,255,0.15); color: #fff; border: 1.5px solid rgba(255,255,255,0.4); backdrop-filter: blur(6px); }
        .rse-hero-btn-call:hover { background: rgba(255,255,255,0.25); }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 900px) {
          .rse-layout {
            grid-template-columns: 1fr;
            padding: 32px 20px 60px;
          }
          .rse-main { padding-right: 0; }
          .rse-card-wrap { position: static; }
          .rse-contact-card { margin-bottom: 32px; }
          .rse-hero-content { padding: 32px 24px; max-width: 100%; }
          .rse-gallery-item:first-child { height: 280px; }
          .rse-gallery-item:not(:first-child) { height: 180px; }
          .rse-table-wrap { grid-template-columns: 1fr; gap: 0; }
          .rse-quick-stats { flex-wrap: wrap; }
          .rse-qs { flex: 0 0 33.333%; border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 520px) {
          .rse-gallery { grid-template-columns: 1fr; }
          .rse-gallery-item:first-child { grid-column: 1; height: 260px; }
          .rse-hero-btns { flex-direction: column; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="rse-hero">
        <Image src={property.image} alt={property.title} fill priority />
        <div className="rse-hero-overlay" />
        <div className="rse-hero-content">
          <div className="rse-badge-row">
            <span className="rse-badge rse-badge-type">{property.type}</span>
            {ext.featured && (
              <span className="rse-badge rse-badge-featured">Featured</span>
            )}
          </div>
          <h1>{property.title}</h1>
          <div className="rse-hero-loc">
            <MapPin size={16} />
            <span>{property.location}</span>
          </div>
          <div className="rse-hero-price">{property.price}</div>
          <div className="rse-hero-btns">
            <a
              href={`https://wa.me/919818077956?text=${waMsg}`}
              className="rse-hero-btn rse-hero-btn-wa"
              target="_blank"
            >
              <MessageCircle size={18} /> WhatsApp Agent
            </a>
            <a href="tel:+919818077956" className="rse-hero-btn rse-hero-btn-call">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <div className="rse-layout">

        {/* ── MAIN CONTENT ── */}
        <div className="rse-main">

          {/* Quick stats */}
          <div className="rse-quick-stats">
            <div className="rse-qs">
              <Bed size={20} />
              <div className="rse-qs-val">{property.beds}</div>
              <div className="rse-qs-lbl">Beds</div>
            </div>
            <div className="rse-qs">
              <Bath size={20} />
              <div className="rse-qs-val">{property.baths}</div>
              <div className="rse-qs-lbl">Baths</div>
            </div>
            <div className="rse-qs">
              <Square size={20} />
              <div className="rse-qs-val">{property.sqft}</div>
              <div className="rse-qs-lbl">Sq. Ft.</div>
            </div>
            <div className="rse-qs">
              <Car size={20} />
              <div className="rse-qs-val">{ext.parking}</div>
              <div className="rse-qs-lbl">Parking</div>
            </div>
            <div className="rse-qs">
              <Building size={20} />
              <div className="rse-qs-val">{ext.propertyAge}</div>
              <div className="rse-qs-lbl">Age</div>
            </div>
          </div>

          {/* Description */}
          <div className="rse-section">
            <h2 className="rse-section-head">About this Property</h2>
            <div className="rse-desc">
              <p>{property.fullDescription}</p>
              <p>
                Unbeatable location — metro walking distance, markets, schools,
                and hospitals all nearby. {property.location.split(",")[0]} is one
                of the most sought-after areas in South Delhi: strong community,
                safe environment, and consistently appreciating property values.
              </p>
              <p>
                North-East facing ensures sunlight and ventilation all day long.
                {ext.parking} dedicated parking spaces mean no stress — ever. Servant
                room, modular wardrobes, and 7 pre-installed ACs mean you move in
                and relax from day one.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="rse-section">
            <h2 className="rse-section-head">What's Included</h2>
            <div className="rse-tags">
              <span className="rse-tag rse-tag-highlight">Brand New Construction</span>
              <span className="rse-tag rse-tag-highlight">7 ACs Installed</span>
              <span className="rse-tag rse-tag-highlight">3 Car Parkings</span>
              <span className="rse-tag rse-tag-highlight">Metro Walking Distance</span>
              <span className="rse-tag">Semi-Furnished</span>
              <span className="rse-tag">Servant Room Attached</span>
              <span className="rse-tag">Modular Wardrobes</span>
              <span className="rse-tag">Marble Flooring</span>
              <span className="rse-tag">Gated Community</span>
              <span className="rse-tag">24×7 Power Backup</span>
              <span className="rse-tag">Pet Friendly</span>
              <span className="rse-tag">Bank Loan Assistance</span>
            </div>
          </div>

          {/* Property Details */}
          <div className="rse-section">
            <h2 className="rse-section-head">Property Details</h2>
            <div className="rse-table-wrap">
              <table className="rse-table">
                <tbody>
                  <tr><td>Super Area</td><td>{property.sqft} sq ft</td></tr>
                  <tr><td>Carpet Area</td><td>{ext.carpetArea} sq ft</td></tr>
                  <tr><td>Bedrooms</td><td>{property.beds}</td></tr>
                  <tr><td>Bathrooms</td><td>{property.baths}</td></tr>
                  <tr><td>Balconies</td><td>{ext.balcony}</td></tr>
                  <tr><td>Parking</td><td>{ext.parking} covered</td></tr>
                </tbody>
              </table>
              <table className="rse-table">
                <tbody>
                  <tr><td>Floor</td><td>{ext.floorNumber}</td></tr>
                  <tr><td>Facing</td><td>{ext.facing}</td></tr>
                  <tr><td>Ownership</td><td>{ext.ownership}</td></tr>
                  <tr><td>Flooring</td><td>{ext.flooring}</td></tr>
                  <tr><td>Lifts</td><td>{ext.lifts}</td></tr>
                  <tr><td>Property Age</td><td>{ext.propertyAge}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Amenities */}
          <div className="rse-section">
            <h2 className="rse-section-head">Amenities & Services</h2>
            <div className="rse-table-wrap">
              <table className="rse-table">
                <tbody>
                  <tr>
                    <td><span style={{display:"flex",alignItems:"center",gap:6}}><Droplets size={14}/>Water Source</span></td>
                    <td>{ext.waterSource}</td>
                  </tr>
                  <tr>
                    <td><span style={{display:"flex",alignItems:"center",gap:6}}><Zap size={14}/>Power Backup</span></td>
                    <td>{ext.powerBackup}</td>
                  </tr>
                  <tr>
                    <td><span style={{display:"flex",alignItems:"center",gap:6}}><Shield size={14}/>Gated Community</span></td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><span style={{display:"flex",alignItems:"center",gap:6}}><PawPrint size={14}/>Pet Friendly</span></td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              <table className="rse-table">
                <tbody>
                  {ext.semiFurnishedItems.map((item) => (
                    <tr key={item}>
                      <td><span style={{display:"flex",alignItems:"center",gap:6}}><CheckCircle2 size={14} style={{color:"var(--gold)"}}/>Included</span></td>
                      <td>{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Score */}
          <div className="rse-section">
            <h2 className="rse-section-head">Property Score</h2>
            <div className="rse-score-row">
              <span className="rse-score-label">Overall Rating</span>
              <StarRating n={5} />
              <span style={{fontSize:"0.85rem",color:"var(--muted)",marginLeft:8}}>5.0 / 5.0</span>
            </div>
            <div className="rse-score-row">
              <span className="rse-score-label">Energy Class</span>
              <EnergyBadge rating={ext.energyClass} />
            </div>
            <div className="rse-score-row">
              <span className="rse-score-label">Property ID</span>
              <span style={{fontWeight:600}}>#{ext.propertyId}</span>
            </div>
          </div>

          {/* Gallery */}
          <div className="rse-section">
            <h2 className="rse-section-head">Gallery</h2>
            <div className="rse-gallery">
              {images.map((img, i) => (
                <div key={i} className="rse-gallery-item">
                  <Image
                    src={img}
                    alt={`${property.title} — view ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <a href="/#featured" className="rse-back">
            ← Back to Properties
          </a>
        </div>

        {/* ── STICKY CONTACT CARD ── */}
        <aside className="rse-card-wrap">
          <div className="rse-contact-card">
            <div className="rse-card-price">{property.price}</div>
            <div className="rse-card-price-label">{property.type} · South Delhi</div>

            <a
              href={`https://wa.me/919818077956?text=${waMsg}`}
              className="rse-btn rse-btn-wa"
              target="_blank"
            >
              <MessageCircle size={20} /> WhatsApp Agent Now
            </a>
            <a href="tel:+919818077956" className="rse-btn rse-btn-call">
              <Phone size={20} /> Call +91 98180 77956
            </a>
            <a href="#gallery" className="rse-btn rse-btn-outline">
              <ChevronDown size={18} /> View Gallery
            </a>

            <hr className="rse-card-divider" />

            <div className="rse-card-stats">
              <div className="rse-card-stat">
                <div className="rse-card-stat-val">{property.beds} BHK</div>
                <div className="rse-card-stat-lbl">Configuration</div>
              </div>
              <div className="rse-card-stat">
                <div className="rse-card-stat-val">{property.sqft} ft²</div>
                <div className="rse-card-stat-lbl">Super Area</div>
              </div>
              <div className="rse-card-stat">
                <div className="rse-card-stat-val">{ext.floorNumber}</div>
                <div className="rse-card-stat-lbl">Floor</div>
              </div>
              <div className="rse-card-stat">
                <div className="rse-card-stat-val">{ext.facing}</div>
                <div className="rse-card-stat-lbl">Facing</div>
              </div>
            </div>

            <div className="rse-trust">
              <CheckCircle2 size={14} />
              Verified listing · Site visit available
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}