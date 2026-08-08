import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconArrowRight } from "./icons";
import { Reveal } from "./Reveal";

export const Hero: React.FC = () => {
  const { hero } = siteConfig;
  const images = hero.marqueeImages;

  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...images, ...images];

  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Column: Text & CTAs */}
        <Reveal className="flex flex-col items-start">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="text-[2.75rem] md:text-[4rem] font-medium tracking-tight mb-5 text-plum font-display leading-[1.1]">
            {hero.headlineTop}{" "}
            <span className="italic font-normal text-berry">{hero.headlineEmphasis}</span>
          </h1>
          <p className="text-[1.125rem] text-ink opacity-85 mb-8 max-w-[520px] font-body">
            {hero.subtext}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contact" className="btnPrimary">
              {hero.primaryCta} <IconArrowRight />
            </a>
            <a href="#gallery" className="btnGhost">
              {hero.secondaryCta}
            </a>
          </div>
        </Reveal>

        {/* Right Column: Continuous Horizontal Marquee with Prominent Full-Sized Images */}
        <Reveal delay={200} className="flex justify-center w-full">
          <div className="relative w-full max-w-[480px] h-[480px] md:h-[520px] bg-blush rounded-3xl py-[0.85rem]  shadow-[0_16px_40px_rgba(74,25,66,0.1)] overflow-hidden">
            {/* Soft Edge Fade Overlays */}
            <div className="absolute top-0 left-0 w-[45px] h-full bg-gradient-to-r from-blush to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-[45px] h-full bg-gradient-to-l from-blush to-transparent z-10 pointer-events-none" aria-hidden="true" />

            {/* Continuous Marquee Track */}
            <div className="flex gap-5 w-max animate-[marqueeScroll_24s_linear_infinite] items-center h-full hover:[animation-play-state:paused]">
              {marqueeList.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative w-[310px] md:w-[340px] h-[430px] md:h-[470px] rounded-[calc(1.5rem-4px)] overflow-hidden shrink-0 border-[2.5px] border-paper shadow-[0_8px_24px_rgba(74,25,66,0.12)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Image
                    src={imgUrl}
                    alt={`Cakes by Iram creation ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                    priority={idx < 2}
                  />
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5 px-5 py-2.5 bg-paper border border-gold/35 rounded-full shadow-[0_8px_24px_rgba(43,27,34,0.12)] z-20 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-berry shadow-[0_0_8px_#C24868] shrink-0" />
              <span className="font-body text-[0.8125rem] font-semibold text-plum">{hero.badge}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
