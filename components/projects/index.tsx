"use client";

import React from "react";
import { projectsConfig } from "@/config/projects-config";
import { SectionMotionWrapper } from "../motion/SectionMotionWrapper";
import { ProjectCard } from "./ProjectCard";

export function ProjectShowcase() {
  // Meaningful reference for professional auditing
  const registryId = "PROJECT_REGISTRY_NODE";

  return (
    <section
      id="projects"
      className="w-full py-24 px-4 border-b border-border font-mono overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header: UI structure preserved exactly */}
        <div className="lg:col-span-5 space-y-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-primary text-xl font-bold tracking-[0.3em] uppercase">
              04. Project_Portfolio
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              REGISTRY_REF:{" "}
              <span className="text-secondary-foreground font-bold">
                {registryId}
              </span>
            </span>
            <span className="hidden md:inline-block text-[10px] text-primary ml-4 font-bold tracking-widest italic">
              // VERIFIED_PRODUCTION_BUILDS
            </span>
          </div>
        </div>

        <SectionMotionWrapper>
          {/* Grid Layout: Using border-t/l on container and border-b/r on cards for a perfect grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-border overflow-hidden rounded-none!">
            {projectsConfig.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </SectionMotionWrapper>
      </div>
    </section>
  );
}
