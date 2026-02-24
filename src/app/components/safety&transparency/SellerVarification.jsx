"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    title: "Structured Verification Framework",
    desc: "AVX maintains a layered verification process designed to ensure consultants meet identity, operational, and documentation standards before becoming visible to buyers.",
    img: "/verification.jpg",
    hero: true,
  },
  {
    title: "Business Address Confirmation",
    desc: "Registered business locations are verified to ensure operational legitimacy.",
    img: "/business-address.jpg",
  },
  {
    title: "Contact Validation",
    desc: "Communication channels are authenticated for reliable interaction.",
    img: "/contact-validation.webp",
  },
  {
    title: "Documentation Submission",
    desc: "Required compliance and business documents are reviewed before activation.",
    img: "/document-confirm.jpg",
  },
  {
    title: "Identity Verification",
    desc: "Consultants complete credential validation to confirm identity.",
    img: "/identity-varification.png",
  },
];

export default function SellerVerification() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const desktopGridStyle = isDesktop
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "180px 180px 210px",
        gap: "24px",
      }
    : {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      };

  const getCardStyle = (i) => {
    if (!isDesktop) return { height: i === 0 ? "280px" : "200px" };
    const gridPositions = [
      { gridColumn: "1 / 3", gridRow: "1 / 3" },
      { gridColumn: "3",     gridRow: "1" },
      { gridColumn: "3",     gridRow: "2" },
      { gridColumn: "1",     gridRow: "3" },
      { gridColumn: "2 / 4", gridRow: "3" },
    ];
    return gridPositions[i] || {};
  };

  return (
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* HEADER */}
        <div className="mb-10 lg:mb-20 max-w-xl">
          <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold mb-4">
            Seller Verification
          </p>

          <h2 className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-bold leading-tight text-primary">
            Verified <span className="text-fourth">Consultant Participation</span>
          </h2>

          <p className="mt-5 text-third text-[15px] lg:text-[16px] leading-relaxed">
            Consultants on AVX undergo structured verification checks to reduce
            anonymous listings and improve accountability across the marketplace.
          </p>
        </div>

        {/* CARDS */}
        <div style={desktopGridStyle}>
          {cards.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="group relative rounded-2xl lg:rounded-3xl overflow-hidden border border-[#1f2937] cursor-pointer"
                style={getCardStyle(i)}
              >
                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition duration-700"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* HOVER / TAP REVEAL PANEL */}
                <div
                  className={`absolute inset-0 bg-[#0f1117]/90 transition-transform duration-500 ease-out flex flex-col justify-end p-5 lg:p-8
                    ${isActive ? "translate-y-0" : "translate-y-full"}
                    lg:group-hover:translate-y-0`}
                >
                  <h3
                    className={`font-semibold text-fourth mb-2 lg:mb-3
                      ${i === 0 ? "text-xl lg:text-2xl" : "text-base lg:text-xl"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-third leading-relaxed mb-3 lg:mb-4">
                    {item.desc}
                  </p>
                  <div className="w-10 lg:w-12 h-[2px] bg-fourth opacity-80" />
                </div>

                {/* DEFAULT VISIBLE LABEL */}
                <div className="relative h-full p-5 lg:p-8 flex flex-col justify-end pointer-events-none">
                  <h3
                    className={`font-semibold text-primary transition duration-300
                      ${i === 0 ? "text-lg lg:text-xl" : "text-base lg:text-lg"}
                      ${isActive ? "opacity-0" : "opacity-100"}
                      lg:group-hover:opacity-0`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`w-8 lg:w-10 h-[2px] bg-fourth mt-2 lg:mt-3 transition duration-300
                      ${isActive ? "opacity-0" : "opacity-70"}
                      lg:group-hover:opacity-0`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}