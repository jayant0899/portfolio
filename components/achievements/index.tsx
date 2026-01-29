"use client";

import React from "react";
import { achievementsConfig } from "@/config/achievements-config";
import { SectionMotionWrapper } from "../motion/SectionMotionWrapper";
import { AchievementCard } from "./AchievementCard";

export function AchievementsSection() {
  const sectionRef = "ACHIEVEMENT_LOG_NODE";

  return (
    <section
      id="achievements"
      className="w-full py-24 px-4 border-b border-border font-mono overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header: Professional & SEO Focused */}
        <div className="lg:col-span-5 space-y-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-primary text-xl font-bold tracking-[0.3em] uppercase">
              06. Key_Achievements
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              REGISTRY_ID:{" "}
              <span className="text-secondary-foreground font-bold">
                {sectionRef}
              </span>
            </span>
            <span className="hidden md:inline-block text-[10px] text-primary ml-4 font-bold tracking-widest italic">
              // VERIFIED_PROFESSIONAL_RECORDS
            </span>
          </div>
        </div>

        <SectionMotionWrapper>
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievementsConfig.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </SectionMotionWrapper>
      </div>
    </section>
  );
}