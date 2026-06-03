const areas = [
  {
    name: "Defence Colony",
    desc: "One of Delhi's most prestigious addresses, known for wide tree-lined roads, independent houses and premium builder floors.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    props: "200+ Properties",
  },
  {
    name: "Greater Kailash (GK-1 & GK-2)",
    desc: "Affluent neighbourhood with luxury homes, vibrant markets and excellent connectivity with strong rental demand.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    props: "150+ Properties",
  },
  {
    name: "Lajpat Nagar",
    desc: "Strategic location with excellent metro access and thriving commercial opportunities for investors.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    props: "300+ Properties",
  },
  {
    name: "New Friends Colony",
    desc: "A peaceful neighbourhood featuring spacious homes, premium builder floors and family-friendly living.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    props: "120+ Properties",
  },
];

const insights = [
  {
    title: "Established Neighbourhoods",
    desc: "Premium residential communities with mature infrastructure and strong resale demand.",
  },
  {
    title: "Strong Connectivity",
    desc: "Direct access to metro networks, Gurgaon, Noida and key business districts.",
  },
  {
    title: "High Rental Demand",
    desc: "Consistent demand from professionals, business owners and expatriate families.",
  },
  {
    title: "Long-Term Appreciation",
    desc: "Among Delhi's strongest-performing real estate markets for capital preservation.",
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="
        pt-28
        md:pt-36
        lg:pt-44
        pb-24
        md:pb-32
        lg:pb-40
        bg-[#F5F0E8]
        overflow-hidden
      "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-[#0F1923]
              font-normal
              leading-[0.95]
              mb-8
            "
          >
            Popular <span className="italic text-[#C9A84C]">Areas</span>
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
            Explore South Delhi's most desirable neighbourhoods where luxury
            living, premium infrastructure and long-term investment potential
            come together.
          </p>
        </div>

        {/* Area Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            xl:gap-10
          "
        >
          {areas.map((area, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-[#E7E2D8]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={area.img}
                  alt={area.name}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-8 lg:p-9 flex flex-col flex-1">
                <h3
                  className="
                    font-display
                    text-3xl
                    lg:text-[2rem]
                    text-[#0F1923]
                    mb-3
                  "
                >
                  {area.name}
                </h3>

                <p
                  className="
                    text-[#C9A84C]
                    text-sm
                    font-medium
                    mb-6
                  "
                >
                  {area.props}
                </p>

                <p
                  className="
                    text-[#667085]
                    text-[15px]
                    leading-8
                    flex-1
                    mb-8
                  "
                >
                  {area.desc}
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://wa.me/919818077956"
                    target="_blank"
                    rel="noopener"
                    className="
                      inline-flex
                      items-center
                      text-[#C9A84C]
                      text-sm
                      uppercase
                      tracking-[0.15em]
                      font-medium
                      hover:gap-2
                      transition-all
                      duration-300
                    "
                  >
                    View Properties →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-12"></div>

        {/* Investment Section – heading + description now perfectly centered */}
        <div className="mt-24 md:mt-32 lg:mt-40">
          <div className="bg-white rounded-3xl border border-[#E7E2D8] p-10 md:p-14 lg:p-20">
            {/* Centered wrapper – forces perfect alignment at all breakpoints */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3
                className="
                  font-display
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  leading-[1.1]
                  text-[#0F1923]
                  mb-8
                "
              >
                Why Invest In
                <span className="italic text-[#C9A84C] block">South Delhi</span>
              </h3>

              <p
                className="
                  w-full
                  max-w-[780px]
                  mx-auto
                  text-center
                  text-lg
                  md:text-xl
                  leading-[1.9]
                  text-[#667085]
                "
              >
                South Delhi continues to attract homeowners, investors and
                businesses because of limited supply, premium infrastructure,
                excellent connectivity and long-term appreciation.
              </p>
            </div>

            <div className="h-16 md:h-20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
              {insights.map((item, i) => (
                <div
                  key={i}
                  className="
                    group
                    h-full
                    flex
                    flex-col
                    text-left
                    p-10
                    rounded-2xl
                    bg-[#FAFAF7]
                    border
                    border-[#EEE8DE]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C9A84C]/30
                    hover:shadow-xl
                  "
                >
                  <div className="text-[#C9A84C] text-5xl font-display mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-[#0F1923] font-semibold text-lg mb-4">
                    {item.title}
                  </h4>
                  <p className="flex-1 text-[#667085] leading-8 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}