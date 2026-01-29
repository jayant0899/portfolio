import { skillRegistry } from "@/config/skills-config";
import { SectionMotionWrapper } from "../motion/SectionMotionWrapper";
import { SkillCard } from "./SkillCard";

export function SkillSection() {
  // Meaningful reference for professional architectural review
  const stackAuditRef = "PROFESSIONAL_SKILL_VERIFICATION_v1.0.2";

  return (
    <section
      id="skills"
      className="w-full py-24 px-4 border-b border-border font-mono overflow-hidden "
    >
      <div className="container mx-auto">
        {/* Section Header: Optimized for Professional Identity & SEO */}
        <div className="lg:col-span-5 space-y-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-primary font-mono text-xl font-bold tracking-[0.3em] uppercase">
              05. Technical_Skills
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              AUDIT_REF:{" "}
              <span className="text-secondary-foreground font-bold">
                {stackAuditRef}
              </span>
            </span>
            <span className="hidden sm:inline-block text-[10px] text-primary animate-pulse ml-4 font-bold tracking-widest">
              SKILL_ASSETS_VALIDATED // [STABLE]
            </span>
          </div>
        </div>

        <SectionMotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {skillRegistry.map((category) => (
              <article key={category.categoryId} className="space-y-8">
                {/* Professional Domain Header */}
                <header className="flex flex-col gap-2">
                  <h3 className="text-WHITE_PURE font-bold text-sm tracking-tighter uppercase">
                    {category.categoryLabel}
                  </h3>
                  {/* Category Status Indicator */}
                  <div className="h-1 w-full bg-border/20 rounded-none!">
                    <div
                      className="h-full"
                      style={{
                        width: "100%",
                        backgroundColor: category.brandColor,
                        boxShadow: `0 0 10px ${category.brandColor}40`,
                      }}
                    />
                  </div>
                </header>

                {/* Individual Skill Cards */}
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      accent={category.brandColor}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionMotionWrapper>
      </div>
    </section>
  );
}
