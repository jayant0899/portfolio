"use client";

import { TerminalBoot } from "@/components/motion/TerminalBoot";
import { Badge } from "@/components/ui/badge";
import { experienceConfig } from "@/config/experience-config";
import { ChangelogFeed } from "./ChangelogFeed";
import { ReleaseHeader } from "./ReleaseHeader";

export function ExperienceSection() {
  // Mapping the new standardized config to the UI while keeping Experience terminology
  const { milestones, sectionTitle, registryRef } = experienceConfig;
  const journalRef = "CAREER_HISTORY_v2025";

  return (
    <section
      id="experience"
      className="w-full py-24 px-4 border-b border-border  overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header: Experience-focused layout preserved exactly */}
        <div className="lg:col-span-5 space-y-8 mb-16">
          <div className="space-y-2">
            <h2 className="text-primary font-mono text-xl font-bold tracking-[0.3em] uppercase">
              {sectionTitle}
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              JOURNAL_REF:{" "}
              <span className="text-secondary-foreground font-bold">
                {journalRef}
              </span>
            </span>
            <span className="hidden sm:inline-block text-[10px] text-primary ml-4 font-bold tracking-widest italic">
              // REGISTRY: {registryRef}
            </span>
          </div>
        </div>

        {/* Experience Timeline Container */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TerminalBoot key={milestone.id} delay={index * 0.1}>
              <div className="relative pl-12 pb-16 last:pb-0 group">
                {/* Branch Line Segment - Industrial UI */}
                <div className="absolute left-[5px] top-0 bottom-0 w-px bg-secondary group-hover:bg-primary transition-colors" />

                {/* Experience Milestone Node (Sharp Square) */}
                <div className="absolute left-0 top-1 w-3 h-3 border-2 border-secondary group-hover:border-primary group-hover:rotate-45 transition-all duration-300 z-10 rounded-none!" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left: Professional Metadata column */}
                  <article className="lg:col-span-3 font-mono pt-1">
                    <div className="text-primary font-bold text-xl tracking-tighter">
                      {milestone.id}
                    </div>
                    <div className="text-muted-foreground text-[10px] font-bold uppercase mt-1">
                      TENURE: {milestone.duration}
                    </div>
                    <Badge
                      variant="secondary"
                      className="rounded-none! text-[9px] mt-4 font-bold border-none uppercase tracking-widest"
                    >
                      {milestone.tenureStatus}
                    </Badge>
                  </article>

                  {/* Right: Experience Details Card */}
                  <div className="lg:col-span-9">
                    <div className="border border-border bg-muted/5 p-6 md:p-8 rounded-none! group-hover:border-primary transition-all duration-500 relative">
                      {/* Decorative Corner Accent */}
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-primary transition-all pointer-events-none" />

                      {/* Mapping milestone data to existing ReleaseHeader props */}
                      <ReleaseHeader
                        role={milestone.position}
                        instance={milestone.organization}
                        stack={milestone.techStack}
                      />

                      {/* Mapping records to existing ChangelogFeed component */}
                      <ChangelogFeed logs={milestone.achievements} />
                    </div>
                  </div>
                </div>
              </div>
            </TerminalBoot>
          ))}
        </div>
      </div>
    </section>
  );
}
