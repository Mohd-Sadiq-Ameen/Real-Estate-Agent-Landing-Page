"use client";

import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[65vh] md:min-h-[50vh] xl:min-h-[40vh] h-full w-full  flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85"
          alt="Luxury property South Delhi"
          fill
          priority
          className="object-cover object-bottom md:object-bottom lg:object-bottom w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/75 via-[#0F1923]/55 to-[#0F1923]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 via-transparent to-transparent" />
      </div>

      {/* Content container – fixed width and auto margins for 1440px+ */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ maxWidth: "1400px" }}
      >
        <div className="h-40 sm:h-10 md:h-0 lg:h-5" />
        <div className=""></div>

        <h1
          className="
            font-display
            text-5xl sm:text-5xl md:text-[50px] lg:text-7xl xl:text-7xl
            font-light text-white
            mb-2  mt-4 md:mt-36 leading-tight
          "
        >
          Luxury Properties <br />
          <span className="text-[#C9A84C] italic inline-block">
            in South Delhi
          </span>
        </h1>

        {/* Description – wrapped in flex to force centering */}
        <div className="flex justify-center w-full">
          <p
            className="
              text-gray-300
              text-sm md:font-base lg:text-xl
              max-w-90 md:max-w-103 lg:max-w-150 xl:max-w-140
              leading-relaxed
              px-1 mt-1 sm:px-4
            "
            style={{ textAlign: "center" }}
          >
            Buy, sell, rent and invest in premium builder floors & commercial
            spaces with trusted local expertise.
          </p>
        </div>

        <div className="h-8 lg:h-10" />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-2 lg:gap-5">
          <a
            href="https://wa.me/919818077956"
            target="_blank"
            rel="noopener"
            className="
              inline-flex items-center justify-center gap-3 
              bg-[#D4AF37] hover:bg-[#b8922f]
              text-white
              font-semibold uppercase
              text-sm
              transition-all duration-300
              rounded-lg shadow-md hover:shadow-xl
            "
            style={{ padding: "8px 4px" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .2 5.34.2 11.88c0 2.08.54 4.1 1.56 5.9L0 24l6.42-1.68a11.9 11.9 0 0 0 5.64 1.44h.01c6.53 0 11.86-5.34 11.86-11.88 0-3.17-1.23-6.15-3.41-8.4ZM12.07 21.7h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.81 1 1.02-3.71-.24-.38a9.86 9.86 0 0 1-1.52-5.23C2.11 6.6 6.54 2.18 12.06 2.18c2.63 0 5.1 1.03 6.95 2.9a9.74 9.74 0 0 1 2.9 6.96c0 5.52-4.42 9.66-9.84 9.66Zm5.43-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.5.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            WhatsApp Now
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+919818077956"
            className="
              inline-flex items-center justify-center gap-2
              border border-white/40 hover:border-[#C9A84C]
              text-white hover:text-[#C9A84C]
              font-medium uppercase
              text-sm
              transition-all duration-300
              rounded-lg
            "
            style={{ padding: "8px 34px" }}
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>

        <div className="flex justify-center w-full mt-4 mb-3 md:mb-5 lg:mb-0 lg:mt-5 xl:mb-5">
          <div className="grid grid-cols-3 gap-8 sm:gap-12 w-full max-w-md">
            {[
              { num: "500+", label: "DEALS" },
              { num: "10+", label: "YEARS" },
              { num: "1000+", label: "CLIENTS" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl md:text-2xl text-[#C9A84C] font-semibold ">
                  {s.num}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
