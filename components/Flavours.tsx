import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { Reveal } from "./Reveal";

export const Flavours: React.FC = () => {
  const { flavours } = siteConfig;

  return (
    <section id="flavours" className="bg-blush py-20 md:py-24 relative">
      <div className="container">
        {/* Section Header */}
        <Reveal className="sectionHeader">
          <span className="eyebrow">{flavours.eyebrow}</span>
          <h2>{flavours.heading}</h2>
          <p className="sectionSubtext">{flavours.subtext}</p>
        </Reveal>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavours.items.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 50}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(74,25,66,0.08)] border border-gold/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(74,25,66,0.2)] hover:border-berry/50"
            >
              {/* Background Image (Covering the entire card) */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay Shadow (Visible at bottom behind text) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

              {/* Content Container (Flavour Name at Bottom) */}
              <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white tracking-wide drop-shadow-md group-hover:text-gold transition-colors duration-200">
                  {item.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={400} className="text-center mt-14 text-[0.9375rem] text-ink opacity-90 font-body">
          <span>{flavours.footnote}</span>{" "}
          <a
            href="#contact"
            className="text-berry font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-plum"
          >
            {flavours.footnoteCta} &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
};
