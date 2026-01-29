import { Skill } from "@/types/skills";

interface SkillCardProps {
  skill: Skill;
  accent: string;
}

export function SkillCard({ skill, accent }: SkillCardProps) {
  return (
    <div className="group relative border border-border p-5 transition-all duration-300 hover:border-primary/50 rounded-none!">
      {/* Visual background shift on group hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors pointer-events-none rounded-none!" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[9px] font-bold text-secondary-foreground block mb-1 font-mono uppercase">
              SKILL_ID: {skill.id}
            </span>
            <h4 className="text-WHITE_PURE font-bold text-lg uppercase tracking-tight group-hover:text-primary transition-colors">
              {skill.name}
            </h4>
          </div>
          {/* Professional Mastery Status */}
          <span
            className="text-[9px] font-bold px-2 py-0.5 rounded-none!"
            style={{ backgroundColor: accent, color: "#000000" }}
          >
            {skill.masteryLevel}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between font-mono text-[10px] text-WHITE_PURE font-bold">
            <span className="opacity-50 tracking-widest uppercase">
              Proficiency
            </span>
            <span style={{ color: accent }}>{skill.proficiencyPercentage}%</span>
          </div>

          {/* Segmented Proficiency Bar - Strict Sharp Edges */}
          <div className="flex gap-1 h-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-none!"
                style={{
                  backgroundColor:
                    i * 10 < skill.proficiencyPercentage ? accent : "#1a1a1a",
                  opacity: i * 10 < skill.proficiencyPercentage ? 1 : 0.2,
                }}
              />
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground font-bold tracking-tight leading-tight uppercase font-mono">
            FOCUS // {skill.focusArea}
          </p>

          {/* Ecosystem Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skill.ecosystem.map((item) => (
              <span
                key={item}
                className="text-[8px] text-secondary-foreground font-bold border border-border px-1.5 py-0.5 group-hover:text-WHITE_PURE group-hover:border-primary/30 transition-all rounded-none!"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Hardware Accent */}
      <div
        className="absolute top-0 right-0 w-1 h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-none!"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}