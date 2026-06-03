import {
  Home,
  Building2,
  Key,
  Users,
  TrendingUp,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buy Property in South Delhi",
    subtitle: "South Delhi Homes",
    desc: "Discover verified builder floors and luxury residences in Delhi's most sought-after locations.",
    cta: "View Properties",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    icon: Key,
    title: "Rent Premium Properties",
    subtitle: "Homes & Offices",
    desc: "Premium rental options with verified listings, documentation support and quick possession.",
    cta: "Find Rentals",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Sell at Best Market Value",
    subtitle: "Maximum Value",
    desc: "Professional marketing and qualified buyers to help you achieve the best market price.",
    cta: "Get Valuation",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Property Solutions",
    subtitle: "Retail & Offices",
    desc: "Office spaces, retail outlets and investment opportunities across prime business districts.",
    cta: "Explore Options",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    icon: Users,
    title: "Builder Floor Specialists",
    subtitle: "Property Specialists",
    desc: "Exclusive builder floor opportunities across Greater Kailash, Defence Colony and more.",
    cta: "See Listings",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    icon: FileText,
    title: "Property Investment Advisory",
    subtitle: "Expert Guidance",
    desc: "Trusted advice on valuation, investment planning, legal checks and transactions.",
    cta: "Book Consultation",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        pt-32
        md:pt-40
        lg:pt-48
        pb-24
        md:pb-32
        bg-[#FAFAF7]
      "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header – flex centering, spacing on paragraph */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-black
              font-normal
              leading-[0.95]
              mb-8
            "
          >
            Our <span className="italic text-[#C9A84C]">Services</span>
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
              text-[#475467]
              mb-20
              md:mb-24
              lg:mb-32
            "
          >
            Helping buyers, sellers and investors discover premium builder
            floors, commercial spaces and high-value property opportunities
            across South Delhi.
          </p>
        </div>

        {/* Clean spacer – visible gap between description and grid */}
        <div className="h-12 md:h-16" />

        {/* Services grid – 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
              <div className="relative h-60 md:h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} - Royal Siyaram Estate`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase bg-[#0F1923]/60 backdrop-blur-sm px-2 py-1">
                    {s.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 border border-[#C9A84C]/40 rounded-md flex items-center justify-center">
                    <s.icon size={16} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-display text-xl lg:text-[1.45rem] font-medium text-[#0F1923]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-[#8B7D6B] text-[15px] leading-7 flex-1">
                  {s.desc}
                </p>

                {/* Premium centered CTA button */}
                <div
                  className="
                    mt-8
                    pt-6
                    border-t
                    border-[#F1EEE8]
                    flex
                    justify-center
                  "
                >
                  <a
                    href="https://wa.me/919818077956"
                    target="_blank"
                    rel="noopener"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-6
                      py-3
                      rounded-lg
                      border
                      border-[#C9A84C]/30
                      text-[#C9A84C]
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-[#C9A84C]
                      hover:text-white
                    "
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