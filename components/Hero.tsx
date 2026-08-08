import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconArrowRight } from "./icons";
import { Reveal } from "./Reveal";

export const Hero: React.FC = () => {
  const { hero } = siteConfig;
  const images = hero.marqueeImages;

  // Duplicate array for seamless infinite background marquee loop across screens
  const marqueeList = [...images, ...images, ...images];

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-20 md:py-28 bg-ivory">
      {/* Background Continuous Horizontal Marquee (Does NOT pause on hover) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none flex items-center">
        {/* Soft Fade Edge Overlays */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-ivory via-ivory/60 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-ivory via-ivory/60 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-ivory to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ivory to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Continuous Marquee Track */}
        <div className="flex gap-6 w-max animate-[marqueeScroll_35s_linear_infinite] items-center h-[90%]">
          {marqueeList.map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative w-[280px] md:w-[340px] h-[360px] md:h-[440px] rounded-2xl overflow-hidden shrink-0 border border-gold/25 shadow-md"
            >
              <Image
                src={imgUrl}
                alt={`Cakes by Iram creation ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center">
        <Reveal className="max-w-3xl w-full bg-ivory/85 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gold/30 shadow-[0_16px_40px_rgba(74,25,66,0.1)] flex flex-col items-center text-center">
          <span className="eyebrow justify-center">{hero.eyebrow}</span>
          <h1 className="text-[2.75rem] md:text-[4.25rem] font-medium tracking-tight mb-5 text-plum font-display leading-[1.1] text-center">
            {hero.headlineTop}{" "}
            <span className="italic font-normal text-berry">{hero.headlineEmphasis}</span>
          </h1>
          <p className="text-[1.125rem] md:text-[1.25rem] text-ink opacity-90 mb-8 max-w-[620px] font-body text-center leading-relaxed">
            {hero.subtext}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href="#contact" className="btnPrimary">
              {hero.primaryCta} <IconArrowRight />
            </a>
            <a href="#gallery" className="btnGhost">
              {hero.secondaryCta}
            </a>
          </div>

          {/* Floating Badge */}
          <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 bg-paper border border-gold/35 rounded-full shadow-md whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-berry shadow-[0_0_8px_#C24868] shrink-0" />
            <span className="font-body text-[0.8125rem] font-semibold text-plum">{hero.badge}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
