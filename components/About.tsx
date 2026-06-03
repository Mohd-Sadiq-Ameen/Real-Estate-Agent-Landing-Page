import { CheckCircle2 } from "lucide-react";

const features = [
  "25+ Years of South Delhi Market Experience",
  "Builder Floor & Luxury Property Specialists",
  "Transparent Transactions & Fair Valuations",
  "Complete Documentation & Legal Support",
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "500+", label: "Successful Deals" },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0F1923]
        pt-28
        md:pt-36
        lg:pt-44
        pb-40
        md:pb-48
        lg:pb-56
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
          {/* Left Image – added overflow-hidden to prevent scaling overflow */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Luxury Property South Delhi"
              className="
                w-full
                h-[350px]
                md:h-[500px]
                lg:h-[620px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />
            <div className="absolute inset-0 rounded-2xl border border-[#C9A84C]/20 pointer-events-none" />
          </div>

          {/* Right Content – refined luxury spacing, no overflow */}
          <div className="max-w-[620px] mx-auto lg:mx-0">
            <p
              className="
                text-[#C9A84C]
                uppercase
                tracking-[0.2em]
                md:tracking-[0.35em]
                text-xs
                font-medium
                mb-8
              "
            >
              About Royal Siyaram Estate
            </p>

            <h2
              className="
                font-display
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[1.08]
                text-white
                mb-14
              "
            >
              South Delhi's Trusted
              <span className="italic text-[#C9A84C] block mt-2">
                Estate Partner
              </span>
            </h2>

            <p
              className="
                text-white/75
                text-lg
                md:text-xl
                leading-[2]
                mb-10
              "
            >
              For over two decades, Royal Siyaram Estate has helped buyers,
              sellers, investors and tenants make confident property decisions
              across South Delhi's most desirable neighbourhoods.
            </p>

            <p
              className="
                text-white/60
                text-lg
                md:text-xl
                leading-[2]
                mb-20
              "
            >
              From luxury builder floors and independent homes to commercial
              investments, we combine local expertise, market knowledge and
              transparent guidance to deliver exceptional results.
            </p>

            <div className="w-24 h-px bg-[#C9A84C]/25 mb-20" />

            {/* Responsive stats grid – no overflow on small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-5xl lg:text-6xl text-[#C9A84C]">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm mt-4 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-[#C9A84C] mt-[6px] shrink-0"
                  />
                  <span className="text-white/75 text-lg leading-8">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}