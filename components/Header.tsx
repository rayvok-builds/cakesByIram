"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconMenu, IconClose } from "./icons";

import ButtonCrossArrow from "./ButtonCrossArrow";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_4px_20px_rgba(43,27,34,0.08)] border-b border-plum/10 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo Image & Script Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline group"
          aria-label={`${siteConfig.business.name} home`}
        >
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-[1.5px] border-gold shadow-[0_2px_8px_rgba(74,25,66,0.12)] flex items-center justify-center bg-paper shrink-0">
            <Image
              src={siteConfig.business.logo}
              alt={`${siteConfig.business.name} Logo`}
              width={46}
              height={46}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-script text-sxl md:text-xl font-semibold text-plum leading-none transition-colors duration-200 group-hover:text-berry">
            {siteConfig.business.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          <a
            href="#flavours"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-90 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            Flavours
          </a>
          <a
            href="#gallery"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-90 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            Gallery
          </a>
          <a
            href="#process"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-90 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            How it works
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center  gap-4">
          <ButtonCrossArrow
            href="#contact"
            text="Enquire"
            variant="primary"
            className=" "
          />
        </div>
      </div>
    </header>
  );
};
