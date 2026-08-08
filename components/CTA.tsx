"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site.config";
import { IconInstagram, IconMail } from "./icons";
import { Reveal } from "./Reveal";

export const CTA: React.FC = () => {
  const { cta, business, flavours } = siteConfig;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    design: "",
    dateTime: "",
    flavour: flavours.items[0]?.name || "Lotus Biscoff",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Create a pre-filled mailto link for direct submission
    const subject = encodeURIComponent(`New Cake Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact Number: ${formData.phone}\nDate & Time Needed: ${formData.dateTime}\nPreferred Flavour: ${formData.flavour}\n\nDesired Cake Design:\n${formData.design}`
    );

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-blush py-20 lg:py-24 relative">
      <div className="container">
        <Reveal className="max-w-[680px] mx-auto mb-12 text-center">
          <span className="eyebrow">{cta.eyebrow}</span>
          <h2 className="text-[2.5rem] md:text-[3.25rem] font-medium text-plum mb-3 font-display">{cta.heading}</h2>
          <p className="text-[1.0625rem] text-ink opacity-85 font-body">{cta.subtext}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-10 lg:gap-12 items-start">
          {/* Direct Quick Contact Sidebar (LEFT SIDE) */}
          <Reveal delay={150} className="bg-paper rounded-3xl p-7 md:p-9 border border-gold/25 shadow-[0_10px_30px_rgba(74,25,66,0.06)]">
            <h3 className="text-2xl text-plum mb-2 font-display">Direct Contact</h3>
            <p className="text-[0.9375rem] text-ink opacity-80 mb-7 leading-relaxed font-body">Prefer to chat directly? Reach out anytime via Instagram DM, phone, or email.</p>

            <div className="flex flex-col gap-5">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 md:p-4 rounded-xl bg-ivory border border-gold/15 transition-all duration-200 hover:translate-x-1 hover:border-berry"
              >
                <div className="w-10 h-10 rounded-full bg-blush text-berry flex items-center justify-center text-lg shrink-0">
                  <IconInstagram />
                </div>
                <div>
                  <span className="block font-body text-[0.75rem] font-semibold text-berry uppercase tracking-wider">Instagram DM</span>
                  <span className="block font-body text-[0.9375rem] font-medium text-plum break-all">{business.instagramHandle}</span>
                </div>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-4 p-3.5 md:p-4 rounded-xl bg-ivory border border-gold/15 transition-all duration-200 hover:translate-x-1 hover:border-berry"
              >
                <div className="w-10 h-10 rounded-full bg-blush text-berry flex items-center justify-center text-lg shrink-0">📞</div>
                <div>
                  <span className="block font-body text-[0.75rem] font-semibold text-berry uppercase tracking-wider">Call / WhatsApp</span>
                  <span className="block font-body text-[0.9375rem] font-medium text-plum break-all">{business.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-4 p-3.5 md:p-4 rounded-xl bg-ivory border border-gold/15 transition-all duration-200 hover:translate-x-1 hover:border-berry"
              >
                <div className="w-10 h-10 rounded-full bg-blush text-berry flex items-center justify-center text-lg shrink-0">
                  <IconMail />
                </div>
                <div>
                  <span className="block font-body text-[0.75rem] font-semibold text-berry uppercase tracking-wider">Email Us</span>
                  <span className="block font-body text-[0.9375rem] font-medium text-plum break-all">{business.email}</span>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Form Card (RIGHT SIDE) */}
          <Reveal delay={250} className="bg-paper rounded-3xl p-8 md:p-10 border border-gold/25 shadow-[0_10px_30px_rgba(74,25,66,0.06)]">
            {submitted ? (
              <div className="text-center py-8 px-4 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-berry text-white text-2xl flex items-center justify-center mb-2">✓</div>
                <h3 className="text-2xl font-display text-plum">Thank you, {formData.name}!</h3>
                <p className="text-ink opacity-85 max-w-[440px] font-body">
                  Your enquiry details have been prepared. Your email client will open shortly to send your message to <strong>{business.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btnGhost"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-body text-sm font-semibold text-plum">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3.5 rounded-lg border border-plum/20 bg-ivory font-body text-[0.9375rem] text-ink transition-all duration-200 focus:outline-none focus:border-berry focus:ring-2 focus:ring-berry/15"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-body text-sm font-semibold text-plum">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. +44 7123 456789"
                      className="w-full px-4 py-3.5 rounded-lg border border-plum/20 bg-ivory font-body text-[0.9375rem] text-ink transition-all duration-200 focus:outline-none focus:border-berry focus:ring-2 focus:ring-berry/15"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Date & Time Needed */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="dateTime" className="font-body text-sm font-semibold text-plum">
                      Date &amp; Time Needed *
                    </label>
                    <input
                      type="text"
                      id="dateTime"
                      required
                      placeholder="e.g. 15th Sept 2026 at 2:00 PM"
                      className="w-full px-4 py-3.5 rounded-lg border border-plum/20 bg-ivory font-body text-[0.9375rem] text-ink transition-all duration-200 focus:outline-none focus:border-berry focus:ring-2 focus:ring-berry/15"
                      value={formData.dateTime}
                      onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                    />
                  </div>

                  {/* Sponge Flavour */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="flavour" className="font-body text-sm font-semibold text-plum">
                      Sponge Flavour *
                    </label>
                    <select
                      id="flavour"
                      className="w-full px-4 py-3.5 rounded-lg border border-plum/20 bg-ivory font-body text-[0.9375rem] text-ink transition-all duration-200 focus:outline-none focus:border-berry focus:ring-2 focus:ring-berry/15 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%2712%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27%234A1942%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpolyline%20points=%276%209%2012%2015%2018%209%27%3E%3C/polyline%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10"
                      value={formData.flavour}
                      onChange={(e) => setFormData({ ...formData, flavour: e.target.value })}
                    >
                      {flavours.items.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                      <option value="Custom / Undecided">Custom / Undecided</option>
                    </select>
                  </div>

                  {/* Desired Cake Design */}
                  <div className="flex flex-col gap-1.5 col-span-full">
                    <label htmlFor="design" className="font-body text-sm font-semibold text-plum">
                      Desired Cake Design *
                    </label>
                    <textarea
                      id="design"
                      rows={4}
                      required
                      placeholder="Describe your vision, theme, tier count, colors, or inspiration..."
                      className="w-full px-4 py-3.5 rounded-lg border border-plum/20 bg-ivory font-body text-[0.9375rem] text-ink transition-all duration-200 focus:outline-none focus:border-berry focus:ring-2 focus:ring-berry/15"
                      value={formData.design}
                      onChange={(e) => setFormData({ ...formData, design: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="btnPrimary w-full py-4 text-base">
                  Submit Enquiry &rarr;
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
