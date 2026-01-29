"use client";

import React from "react";
import { userConfig } from "@/config/user-config";
import { SectionMotionWrapper } from "../motion/SectionMotionWrapper";

export function ExecutiveSummary() {
  // Meaningful reference for internal tracking
  const referenceId = "RESUME_SUMMARY_NODE";

  return (
    <section
      id="summary"
      className="w-full py-24 px-4  border-b border-border font-mono overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header: SEO Optimized Titles */}
        <div className="lg:col-span-5 space-y-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-primary text-xl font-bold tracking-[0.3em] uppercase">
              07. Professional_Overview
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              REF_PROTOCOL:{" "}
              <span className="text-secondary-foreground font-bold">
                {referenceId}
              </span>
            </span>
          </div>
        </div>

        <SectionMotionWrapper>
          <div className="max-w-5xl relative">
            {/* Main Content Block */}
            <div className="space-y-12">
              <div className="relative">
                {/* Visual Accent */}
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-DARK_TEAL/40" />

                {/* Career Goal - Meaningful Heading */}
                <h3 className="text-WHITE_PURE text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[1.2] mb-8">
                  {userConfig.careerObjective}
                </h3>

                {/* Professional Bio */}
                <p className="text-secondary-foreground text-lg md:text-xl font-bold leading-relaxed opacity-90">
                  {userConfig.bio}
                  <span className="inline-block w-3 h-5 bg-primary ml-2 animate-pulse align-middle" />
                </p>
              </div>

              {/* Core Competencies Row: Meaningful Labels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border/50">
                {userConfig.flipSentences
                  ?.slice(0, 3)
                  .map((sentence, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-primary text-[9px] font-bold tracking-widest uppercase">
                        Specialization_0{index + 1}
                      </span>
                      <span className="text-WHITE_PURE text-xs font-bold uppercase tracking-widest">
                        {sentence}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Sharp Corner Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-primary/10 pointer-events-none" />
          </div>
        </SectionMotionWrapper>
      </div>
    </section>
  );
}
