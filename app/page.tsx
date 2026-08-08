import React from "react";
import { siteConfig } from "@/data/site.config";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Flavours } from "@/components/Flavours";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { Quote } from "@/components/Quote";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Scallop } from "@/components/Scallop";

export default function Home() {
  const { theme } = siteConfig;

  return (
    <main>
      {/* Sticky Header */}
      <Header />

      {/* Section 1: Hero */}
      <Hero />

      {/* Scallop Divider -> Flavours (Blush) */}
      <Scallop color={theme.blush} />

      {/* Section 2: Flavours */}
      <Flavours />

      {/* Section 3: Gallery (Ivory background, plain section boundary) */}
      <Gallery />

      {/* Scallop Divider -> Process (Plum Dark) */}
      <Scallop color={theme.plum} />

      {/* Section 4: How It Works / Process */}
      <Process />

      {/* Scallop Divider -> Quote (Transition out of Plum) */}
      <Scallop color={theme.plum} flip />

      {/* Section 5: Testimonial Strip */}
      <Quote />

      {/* Scallop Divider -> CTA (Blush) */}
      <Scallop color={theme.blush} />

      {/* Section 6: Closing CTA / Contact */}
      <CTA />

      {/* Scallop Divider -> Footer (Plum Dark) */}
      <Scallop color={theme.plum} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
