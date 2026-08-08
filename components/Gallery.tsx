import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconInstagram } from "./icons";
import { Reveal } from "./Reveal";

export const Gallery: React.FC = () => {
  const { gallery, business } = siteConfig;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-ivory overflow-hidden">
      {/* Header Container */}
      <div className="container">
        <Reveal className="sectionHeader">
          <span className="eyebrow">{gallery.eyebrow}</span>
          <h2>{gallery.heading}</h2>
          <p className="sectionSubtext">{gallery.subtext}</p>
        </Reveal>
      </div>

      {/* Full Width Edge-to-Edge Masonry Grid (Pure Images) */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {gallery.tiles.map((tile, idx) => (
            <Reveal
              key={tile.id}
              delay={idx * 40}
              className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm border border-gold/20 bg-paper transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {tile.image && (
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-auto block object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Footnote & Instagram Chip */}
      <div className="container">
        <Reveal delay={350} className="flex flex-col items-center text-center mt-14 gap-5">
          <p className="text-sm text-ink opacity-75 max-w-[500px] font-body">{gallery.note}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-paper border border-berry/30 rounded-full text-plum font-body font-semibold text-sm shadow-[0_4px_12px_rgba(74,25,66,0.04)] transition-all duration-200 hover:bg-blush hover:border-berry hover:-translate-y-0.5"
          >
            <IconInstagram />
            <span>{gallery.instagramCta}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
