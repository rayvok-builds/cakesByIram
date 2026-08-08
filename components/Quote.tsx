import React from "react";
import { siteConfig } from "@/data/site.config";
import { Reveal } from "./Reveal";

export const Quote: React.FC = () => {
  const { testimonials } = siteConfig;
  const items = testimonials.items;

  // Duplicate items array for continuous infinite marquee loop
  const marqueeList = [...items, ...items];

  return (
    <section className="h-screen min-h-[600px] bg-ivory flex flex-col justify-center relative overflow-hidden py-12">
      <div className="container mb-10">
        <Reveal className="sectionHeader !mb-0">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2>{testimonials.heading}</h2>
        </Reveal>
      </div>

      {/* Marquee Viewport with 100vh Centering */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft Fade Edges */}
        <div className="absolute top-0 left-0 w-20 md:w-36 h-full bg-gradient-to-r from-ivory via-ivory/80 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-20 md:w-36 h-full bg-gradient-to-l from-ivory via-ivory/80 to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Continuous Horizontal Marquee Track (Hover to Pause) */}
        <div className="flex gap-6 w-max animate-[marqueeScroll_32s_linear_infinite] items-center hover:[animation-play-state:paused]">
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[440px] bg-paper rounded-3xl p-7 md:p-9 border border-gold/25 shadow-[0_8px_24px_rgba(74,25,66,0.06)] shrink-0 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-berry/40 hover:shadow-[0_12px_32px_rgba(74,25,66,0.12)] cursor-pointer"
            >
              <div>
                <span className="font-display text-5xl leading-none text-gold opacity-50 block mb-3">&ldquo;</span>
                <blockquote className="font-display italic text-lg sm:text-xl font-normal text-plum leading-relaxed mb-6">
                  {item.quote}
                </blockquote>
              </div>
              <div className="border-t border-blush pt-4 flex flex-col">
                <cite className="font-body text-sm font-semibold uppercase tracking-wider text-berry not-italic">
                  {item.attribution}
                </cite>
                <span className="font-body text-xs text-ink opacity-70 mt-0.5">
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
