import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#162135] border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-2 border-[#C9A84C] flex items-center justify-center">
              <span className="font-display text-[#C9A84C] text-lg font-bold">RS</span>
            </div>
            <div>
              <div className="font-display text-white text-xl font-semibold">Royal Siyaram Estate</div>
              <div className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">Trusted Property Advisors</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
            South Delhi's trusted estate agents for residential, rental and commercial properties. Serving buyers, sellers and tenants with integrity and expertise.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/919818077956"
              target="_blank"
              rel="noopener"
              className="text-xs bg-[#C9A84C] text-[#0F1923] px-5 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#E8C96A] transition-colors flex items-center gap-2"
            >
              WhatsApp <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Services</h4>
          <ul className="space-y-3">
            {[
              "Buy Property",
              "Sell Property",
              "Rent Property",
              "Builder Floors",
              "Commercial Property",
              "Property Consultation",
            ].map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-white/30 group-hover:bg-[#C9A84C] group-hover:w-4 transition-all" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact – now with larger text */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
          <div className="space-y-5">
            <a
              href="tel:+919818077956"
              className="flex items-start gap-3 text-white/70 hover:text-[#C9A84C] text-base sm:text-base transition-colors group"
            >
              <Phone size={16} className="mt-0.5 flex-shrink-0" />
              98180 77956
            </a>
            <a
              href="mailto:rdc81609@gmail.com"
              className="flex items-start gap-3 text-white/70 hover:text-[#C9A84C] text-base sm:text-base transition-colors"
            >
              <Mail size={16} className="mt-0.5 flex-shrink-0" />
              rdc81609@gmail.com
            </a>
            <div className="flex items-start gap-3 text-white/70 text-base sm:text-base">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              South Delhi, New Delhi
            </div>
          </div>

          <div className="mt-8">
            <h5 className="text-white/40 text-xs tracking-widest uppercase mb-3">Areas</h5>
            <div className="text-white/40 text-xs leading-relaxed">
              Defence Colony · Greater Kailash · Lajpat Nagar · New Friends Colony · South Extension
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© {year} Royal Siyaram Estate. All rights reserved.</p>
          <p className="text-white/30 text-xs">Renting · Sale · Purchase · Consultation</p>
        </div>
      </div>
    </footer>
  );
}