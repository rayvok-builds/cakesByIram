import React from "react";
import { siteConfig } from "@/data/site.config";
import { Reveal } from "./Reveal";

export const Process: React.FC = () => {
  const { process } = siteConfig;

  return (
    <section id="process" className="bg-plum text-paper py-20 lg:py-24 relative">
      <div className="container">
        {/* Section Header */}
        <Reveal className="sectionHeader">
          <span className="eyebrow !text-gold">{process.eyebrow}</span>
          <h2 className="!text-paper">{process.heading}</h2>
        </Reveal>

        {/* 3 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {process.steps.map((step, idx) => (
            <Reveal
              key={step.number}
              delay={idx * 100}
              className="bg-paper/5 border border-gold/25 rounded-2xl p-9 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:bg-paper/[0.08]"
            >
              <span className="font-script text-[3.5rem] leading-none text-gold mb-3">{step.number}</span>
              <h3 className="font-display text-[1.35rem] font-medium text-paper mb-3">{step.title}</h3>
              <p className="font-body text-[0.9375rem] text-blush opacity-90 leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
