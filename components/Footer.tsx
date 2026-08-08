import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconInstagram, IconMail } from "./icons";

export const Footer: React.FC = () => {
  const { footer, business } = siteConfig;

  return (
    <footer className="bg-plum text-blush py-18 pb-10 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 pb-14 border-b border-blush/15">
          {/* Brand Left Column */}
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center gap-3.5 mb-4 no-underline" aria-label={`${business.name} Home`}>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1.5px] border-gold bg-paper flex items-center justify-center shrink-0">
                <Image
                  src={business.logo}
                  alt={`${business.name} Logo`}
                  width={52}
                  height={52}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-script text-[2.5rem] font-semibold text-paper leading-none">{business.name}</span>
            </a>
            <p className="font-body text-[0.9375rem] text-blush opacity-85 max-w-[320px] leading-relaxed">{footer.tagline}</p>
          </div>

          {/* Three Info Columns Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Studio Details */}
            <div>
              <h3 className="font-display text-[1.0625rem] font-medium text-gold mb-5">Studio Details</h3>
              <ul className="list-none flex flex-col gap-3 font-body text-sm text-blush opacity-90">
                {footer.studioInfo.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="font-display text-[1.0625rem] font-medium text-gold mb-5">Navigation</h3>
              <ul className="list-none flex flex-col gap-3 font-body text-sm text-blush opacity-90">
                <li><a href="#flavours" className="text-blush transition-colors duration-200 hover:text-gold">Flavours</a></li>
                <li><a href="#gallery" className="text-blush transition-colors duration-200 hover:text-gold">Gallery</a></li>
                <li><a href="#process" className="text-blush transition-colors duration-200 hover:text-gold">How it works</a></li>
                <li><a href="#contact" className="text-blush transition-colors duration-200 hover:text-gold">Enquire</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Social */}
            <div>
              <h3 className="font-display text-[1.0625rem] font-medium text-gold mb-5">Connect</h3>
              <ul className="list-none flex flex-col gap-3 font-body text-sm text-blush opacity-90">
                <li>
                  <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 text-blush transition-colors duration-200 hover:text-gold">
                    <span>{business.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blush transition-colors duration-200 hover:text-gold">
                    <IconInstagram />
                    <span>{business.instagramHandle}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 text-blush transition-colors duration-200 hover:text-gold">
                    <IconMail />
                    <span>{business.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between pt-8 font-body text-[0.8125rem] text-blush opacity-75">
          <p>
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="font-medium">{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
};
