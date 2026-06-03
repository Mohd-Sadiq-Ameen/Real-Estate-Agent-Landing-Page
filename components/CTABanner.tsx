import { Phone, MapPin, ShieldCheck } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0F1923] overflow-hidden">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* glow layer */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C9A84C]/20 blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* micro trust row */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-[#C9A84C] text-xs tracking-[0.25em] uppercase">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} /> Verified Listings
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> South Delhi Specialists
            </span>
            <span className="flex items-center gap-2">10+ Years Experience</span>
          </div>

          <h2
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-white
              font-normal
              leading-[0.95]
              mb-6
            "
          >
            Find Premium Properties in <br />
            <span className="text-[#C9A84C] italic">South Delhi Without Stress</span>
          </h2>

          <p
            className="
              w-full
              max-w-[780px]
              mx-auto
              text-center
              text-lg
              md:text-xl
              leading-[1.9]
              text-white/60
              mb-10
            "
          >
            Buy, rent or sell builder floors, luxury homes, and commercial spaces
            with verified listings and end-to-end support.
          </p>
        </div>

        {/* Buttons – significantly larger, with official WhatsApp icon */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* WhatsApp Button – official icon + larger size */}
          <a
            href="https://wa.me/919818077956"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-4
              bg-[#25D366] text-white
              px-8 sm:px-10 md:px-12
              py-6 md:py-7
              font-bold tracking-wider
              text-base sm:text-lg md:text-xl
              uppercase
              hover:bg-[#20B859] transition-all duration-300
              rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5
            "
          >
            {/* Official WhatsApp SVG Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .2 5.34.2 11.88c0 2.08.54 4.1 1.56 5.9L0 24l6.42-1.68a11.9 11.9 0 0 0 5.64 1.44h.01c6.53 0 11.86-5.34 11.86-11.88 0-3.17-1.23-6.15-3.41-8.4ZM12.07 21.7h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.81 1 1.02-3.71-.24-.38a9.86 9.86 0 0 1-1.52-5.23C2.11 6.6 6.54 2.18 12.06 2.18c2.63 0 5.1 1.03 6.95 2.9a9.74 9.74 0 0 1 2.9 6.96c0 5.52-4.42 9.66-9.84 9.66Zm5.43-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.5.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            Get Listings on WhatsApp
          </a>

          {/* Call Button – larger too */}
          <a
            href="tel:+919818077956"
            className="
              flex items-center justify-center gap-4
              border-2 border-white/30 text-white
              px-8 sm:px-10 md:px-12
              py-6 md:py-7
              font-bold tracking-wider
              text-base sm:text-lg md:text-xl
              uppercase
              hover:bg-white/10 hover:border-[#C9A84C] transition-all duration-300
              rounded-xl
            "
          >
            <Phone size={24} />
            Talk to Agent
          </a>
        </div>

        {/* bottom reassurance */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/40">
          <span>No spam</span>
          <span>•</span>
          <span>Only verified properties</span>
          <span>•</span>
          <span>Quick response within minutes</span>
        </div>
      </div>
    </section>
  );
}