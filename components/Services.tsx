import {
  Home,
  Building2,
  Key,
  Users,
  TrendingUp,
  FileText,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Buy Property in South Delhi",
    subtitle: "South Delhi Homes",
    desc: "Discover verified builder floors and luxury residences in Delhi's most sought-after locations.",
    cta: "Contact to View Properties",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    icon: Key,
    title: "Rent Premium Properties",
    subtitle: "Homes & Offices",
    desc: "Premium rental options with verified listings, documentation support and quick possession.",
    cta: "Contact to Find Rentals",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Sell at Best Market Value",
    subtitle: "Maximum Value",
    desc: "Professional marketing and qualified buyers to help you achieve the best market price.",
    cta: "Contact to Get Valuation",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Property Solutions",
    subtitle: "Retail & Offices",
    desc: "Office spaces, retail outlets and investment opportunities across prime business districts.",
    cta: "Contact to Explore Options",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    icon: Users,
    title: "Builder Floor Specialists",
    subtitle: "Property Specialists",
    desc: "Exclusive builder floor opportunities across Greater Kailash, Defence Colony and more.",
    cta: "Contact to See Listings",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    icon: FileText,
    title: "Property Investment Advisory",
    subtitle: "Expert Guidance",
    desc: "Trusted advice on valuation, investment planning, legal checks and transactions.",
    cta: "Contact to Book Consultation",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        pt-24 sm:pt-28 md:pt-32 lg:pt-40
        pb-20 sm:pb-24 md:pb-28 lg:pb-32
        bg-white
      "
    >
      <div
        className="max-w-[1400px] mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-black font-normal leading-[1.1] mb-6 sm:mb-8">
            Our <span className="italic text-[#C9A84C]">Services</span>
          </h2>
          <p className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-center text-base sm:text-lg md:text-xl leading-relaxed md:leading-[1.8] text-[#475467] mb-16 sm:mb-20 lg:mb-24 px-4">
            Helping buyers, sellers and investors discover premium builder
            floors, commercial spaces and high-value property opportunities
            across South Delhi.
          </p>
        </div>

        <div className="h-10 md:h-12 lg:h-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                group
                relative
                flex flex-col
                h-full
                overflow-hidden
                bg-white
                border
                border-[#EAE7E1]
                rounded-xl
                transition-all
                duration-500
                hover:border-[#C9A84C]/40
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src={s.img}
                  alt={`${s.title} - Royal Siyaram Estate`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase bg-[#0F1923]/60 backdrop-blur-sm px-2 py-1 rounded">
                    {s.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Content – guaranteed padding and margins via inline styles */}
              <div
                className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              >
                <div
                  className="flex items-center gap-3"
                  style={{ marginBottom: "1rem" }}
                >
                  <div className="w-10 h-10 border border-[#C9A84C]/40 rounded-md flex items-center justify-center">
                    <s.icon size={16} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-medium text-[#0F1923]">
                    {s.title}
                  </h3>
                </div>
                <p
                  className="text-[#8B7D6B] text-base leading-relaxed flex-1"
                  style={{ marginBottom: "1.25rem" }}
                >
                  {s.desc}
                </p>

                <div className="h-5" />

                <div
                  className="mt-6 pt-5 border-t border-[#F1EEE8] flex justify-center"
                  style={{ marginTop: "1.5rem", paddingTop: "1.25rem" }}
                >
                  <a
                    href="https://wa.me/919818077956"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white text-[#C9A84C] text-base sm:text-base uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-[#C9A84C] hover:text-white"
                    style={{ padding: "0.625rem 1.25rem" }}
                  >
                    {s.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}