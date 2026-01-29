"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDeployment } from "@/types/projects-config";
import { ProjectTechGraph } from "./ProjectTechGraph";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectDeployment;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Meaningful label for accessibility and SEO
  const projectSequence = (index + 1).toString().padStart(2, "0");

  return (
    <article className="relative bg-background border-b border-r border-border p-8 min-h-[580px] group flex flex-col justify-between overflow-hidden rounded-none!">
      {/* Background Index Watermark - Non-interfering SEO text */}
      <div
        className="absolute -right-4 -bottom-4 text-[120px] font-bold text-muted/5 select-none font-mono leading-none pointer-events-none"
        aria-hidden="true"
      >
        {projectSequence}
      </div>

      {/* Header: Project Metadata */}
      <div className="flex justify-between items-start z-10 font-mono">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-secondary-foreground font-bold tracking-[0.2em] block uppercase">
              PROJECT_ID // {project.id}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-primary font-bold uppercase tracking-widest">
              STATUS: {project.uptime}
            </span>
            <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-tighter">
              TIMELINE: {project.period.start}{" "}
              {project.period.end
                ? `>> COMPLETED: ${project.period.end}`
                : ">> IN_DEVELOPMENT"}
            </span>
          </div>
        </div>
        <Badge
          variant="outline"
          className="rounded-none! border-primary/40 text-primary text-[8px] font-bold tracking-widest uppercase"
        >
          {project.status}
        </Badge>
      </div>

      {/* Visual & Description Slot */}
      <div className="relative z-10 space-y-5 pt-6">
        {project.image && (
          <div className="relative w-full h-40 bg-muted/20 border border-border overflow-hidden rounded-none!">
            {/* Scanline Effect Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-transparent via-primary/5 to-transparent h-[200%] animate-[scan_4s_linear_infinite]" />
            <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 group-hover:opacity-20 transition-opacity" />

            <img
              src={project.image}
              alt={`Screenshot of ${project.name} application`}
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-60 group-hover:opacity-100"
            />
          </div>
        )}

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <ProjectTechGraph count={project.tech_stack.length} />
      </div>

      {/* Technology Stack & Impact Metrics */}
      <div className="relative z-10 space-y-6 pt-4">
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="text-[8px] px-2 py-0.5 border border-border text-secondary-foreground font-mono font-bold uppercase group-hover:border-primary/30 transition-colors rounded-none!"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="space-y-1">
            <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest italic font-mono">
              // PROJECT_IMPACT
            </p>
            <p className="text-xs text-foreground font-bold font-mono uppercase">
              {project.impact_metric}
            </p>
          </div>

          <div className="flex gap-2">
            {project.deployment_url && (
              <Button size="sm" asChild className="rounded-none!">
                <Link
                  href={project.deployment_url}
                  aria-label={`Visit live website for ${project.name}`}
                >
                  <ExternalLink className="w-3 h-3" />
                  VIEW_LIVE
                </Link>
              </Button>
            )}
            {project.link && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="rounded-none!"
              >
                <Link
                  href={project.link}
                  aria-label={`View source code for ${project.name} on GitHub`}
                >
                  <Github className="w-3 h-3" />
                  SOURCE_CODE
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Radial Hover Interaction */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary via-transparent to-transparent transition-opacity duration-500" />
    </article>
  );
}
