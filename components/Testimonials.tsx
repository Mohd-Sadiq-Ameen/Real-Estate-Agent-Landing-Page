"use client";

import Image from "next/image";

export default function GoogleReviews() {
  const googleReviewLink =
    "https://www.google.com/maps/place/Royal+Siyaram+estate+-+Renting,+Sale+Purchase+%26+Consultant/@28.5685346,77.2314639,15z/data=!4m12!1m2!2m1!1sreal+estate+agents+near+lajpat+nagar+royal+estate+new+delhi+delhi!3m8!1s0x390ce345e1f00333:0x560bd44b1bf1cdc4!8m2!3d28.5597366!4d77.2433662!9m1!1b1!15sCkFyZWFsIGVzdGF0ZSBhZ2VudHMgbmVhciBsYWpwYXQgbmFnYXIgcm95YWwgZXN0YXRlIG5ldyBkZWxoaSBkZWxoaVpDIkFyZWFsIGVzdGF0ZSBhZ2VudHMgbmVhciBsYWpwYXQgbmFnYXIgcm95YWwgZXN0YXRlIG5ldyBkZWxoaSBkZWxoaZIBHWNvbW1lcmNpYWxfcmVhbF9lc3RhdGVfYWdlbmN54AEA!16s%2Fg%2F11s_tp18r2?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D";

  const reviewImages = [
    { src: "/review1.png", alt: "Google 5-star review from a client" },
    { src: "/review2.png", alt: "Google 5-star review testimonial" },
    { src: "/review3.png", alt: "Google review about property services" },
    { src: "/review4.png", alt: "Another happy client Google review" },
  ];

  return (
    <section
      id="testimonials"
      className="py-6 md:py-8 bg-white overflow-hidden  mt-0"
    >
      <div
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <Image
              src="/ratings.png"
              alt="4.9 Google rating from 313 reviews"
              width={200}
              height={50}
              className="w-auto h-auto"
            />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] font-normal leading-tight mt-4">
            What Our Clients Say{" "}
            <span className="italic">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </h2>
          <p className="w-full max-w-3xl mx-auto text-center text-[#64748B] text-lg md:text-xl leading-relaxed mt-6">
            Real feedback from verified home buyers, sellers and investors who
            trusted us with their property decisions.
          </p>
        </div>

        <div className="h-12 md:h-16 lg:h-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reviewImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#EAE6DD] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#B0892A] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#C9A84C] transition-all shadow-md"
            style={{ padding: "1rem 2rem" }}
          >
            Read All 300+ Google Reviews
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="mt-6 mb-0 flex justify-center gap-6 text-center text-base text-[#94A3B8]">
          <div>• Verified Google reviews </div>
          <div>• 100% authentic client experiences</div>
        </div>
      </div>
    </section>
  );
}
