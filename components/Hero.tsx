import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconStar } from "./icons";
import { Reveal } from "./Reveal";
import ButtonCrossArrow from "./ButtonCrossArrow";

export const Hero: React.FC = () => {
  const { hero } = siteConfig;
  const images = hero.marqueeImages;

  const leftColumnImages = [...images, ...images, ...images];
  const rightColumnImages = [...images.slice().reverse(), ...images.slice().reverse(), ...images.slice().reverse()];

  const clientAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
  ];

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col lg:flex-row bg-ivory overflow-hidden pb-8 lg:pb-0">
      
      {/* Editorial Decorative Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0 bg-[radial-gradient(ellipse_at_top_left,#F3DCE0_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,#FFFDF9_0%,transparent_50%)]" 
        aria-hidden="true" 
      />

      {/* Left Side Content Container */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-6 lg:py-0 lg:h-full relative z-10">
        <Reveal className="space-y-5 sm:space-y-6 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          
          {/* Social Proof Review Eyebrow (Centered on Mobile) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 sm:gap-3">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2.5 overflow-hidden shrink-0">
              {clientAvatars.map((url, i) => (
                <div key={i} className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-ivory overflow-hidden bg-paper shadow-xs">
                  <Image src={url} alt={`Client avatar ${i + 1}`} width={36} height={36} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Stars & Text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
                <span className="text-xs sm:text-sm font-bold text-plum ml-1">5.0</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-berry">
                TRUSTED BY 400+ HAPPY CUSTOMERS
              </span>
            </div>
          </div>

          {/* Heading (Centered on Mobile) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-plum leading-[1.08] text-center lg:text-left">
            {hero.headlineTop}{" "}
            <span className="font-script font-normal text-berry italic text-4xl sm:text-6xl lg:text-7xl block sm:inline mt-1 sm:mt-0">
              {hero.headlineEmphasis}
            </span>
          </h1>

          {/* Subheading (Centered on Mobile) */}
          <p className="font-body text-ink/90 text-xs sm:text-base leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            {hero.subtext}
          </p>

          {/* Buttons (Side-by-Side on Mobile) */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row justify-center lg:justify-start sm:gap-4 pt-1 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
            <ButtonCrossArrow
              href="#contact"
              text={hero.primaryCta}
              variant="primary"
            />
            <a
              href="#gallery"
              className="btnGhost px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest justify-center hover:scale-105 transition-all duration-300 truncate"
            >
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

        </Reveal>
      </div>

      {/* Right Side: Continuous Non-Stopping Vertical Image Marquee (Visible in Mobile Viewport with Fade-in) */}
      <div className="w-full lg:w-[45%] h-[380px] sm:h-[480px] lg:h-full relative overflow-hidden flex items-center z-10 mt-4 lg:mt-0">
        
        {/* Top & Bottom gradient fades for seamless scrolling edge transitions */}
        <div className="absolute -top-0.5 left-0 right-0 h-20 lg:h-28 bg-gradient-to-b from-ivory via-ivory/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-28 bg-gradient-to-t from-ivory via-ivory/85 to-transparent z-20 pointer-events-none" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full h-full px-4 lg:px-6 py-0">
          
          {/* Left Column Marquee - Scrolls Upwards Continuously */}
          <div className="w-full h-full overflow-hidden relative">
            <div className="space-y-3 sm:space-y-4 flex flex-col animate-[marqueeVerticalUp_44s_linear_infinite]">
              {leftColumnImages.map((url, index) => (
                <div key={`left-img-${index}`} className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-gold/25 bg-paper shadow-xl group cursor-pointer shrink-0">
                  <Image 
                    src={url} 
                    alt={`Cake creation showcase left ${index + 1}`} 
                    fill 
                    sizes="350px" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Marquee - Scrolls Downwards Continuously */}
          <div className="w-full h-full overflow-hidden relative">
            <div className="space-y-3 sm:space-y-4 flex flex-col animate-[marqueeVerticalDown_44s_linear_infinite]">
              {rightColumnImages.map((url, index) => (
                <div key={`right-img-${index}`} className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-gold/25 bg-paper shadow-xl group cursor-pointer shrink-0">
                  <Image 
                    src={url} 
                    alt={`Cake creation showcase right ${index + 1}`} 
                    fill 
                    sizes="350px" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
