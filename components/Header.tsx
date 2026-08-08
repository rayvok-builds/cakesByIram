"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { IconMenu, IconClose } from "./icons";

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
      className={`sticky top-0 left-0 w-full z-[100] transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-[#FBF5EC]/95 shadow-[0_4px_20px_rgba(43,27,34,0.06)] py-3"
          : "bg-[#FBF5EC]/85 border-b border-plum/10 py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo Image & Script Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline group"
          aria-label={`${siteConfig.business.name} home`}
        >
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-[1.5px] border-gold shadow-[0_2px_8px_rgba(74,25,66,0.1)] flex items-center justify-center bg-paper shrink-0">
            <Image
              src={siteConfig.business.logo}
              alt={`${siteConfig.business.name} Logo`}
              width={46}
              height={46}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-script text-[2.25rem] font-semibold text-plum leading-none transition-colors duration-200 group-hover:text-berry">
            {siteConfig.business.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          <a
            href="#flavours"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-85 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            Flavours
          </a>
          <a
            href="#gallery"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-85 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            Gallery
          </a>
          <a
            href="#process"
            className="font-body text-[0.9375rem] font-medium text-ink opacity-85 transition-all duration-200 hover:opacity-100 hover:text-berry"
          >
            How it works
          </a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="btnPrimary">
            Enquire
          </a>
          <button
            type="button"
            className="flex md:hidden items-center justify-center p-2 text-plum rounded-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="block md:hidden bg-paper border-b border-blush p-6 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <nav aria-label="Mobile Navigation">
            <a
              href="#flavours"
              className="block font-body text-[1.125rem] font-medium text-plum py-3 border-b border-dashed border-blush"
              onClick={closeMenu}
            >
              Flavours
            </a>
            <a
              href="#gallery"
              className="block font-body text-[1.125rem] font-medium text-plum py-3 border-b border-dashed border-blush"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <a
              href="#process"
              className="block font-body text-[1.125rem] font-medium text-plum py-3 border-b border-dashed border-blush last:border-b-0"
              onClick={closeMenu}
            >
              How it works
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
