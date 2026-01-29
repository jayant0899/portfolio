import { Achievement } from "@/types/achievements";

interface AchievementCardProps {
  item: Achievement;
}

export function AchievementCard({ item }: AchievementCardProps) {
  return (
    <div className="group relative border border-border p-8 transition-all duration-300 hover:border-primary/50 rounded-none!">
      {/* Reference Identification Watermark */}
      <div className="absolute top-4 right-4 text-[10px] text-muted-foreground/20 font-bold group-hover:text-primary transition-colors font-mono">
        // REF_{item.id}
      </div>

      <div className="space-y-6">
        <header>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest block mb-2 font-mono">
            {item.category} — {item.date}
          </span>
          <h3 className="text-WHITE_PURE text-2xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-secondary-foreground text-xs font-bold mt-1 uppercase opacity-80 font-mono">
            {item.organization}
          </p>
        </header>

        <p className="text-muted-foreground text-[11px] leading-relaxed max-w-lg">
          {item.description}
        </p>

        {/* Professional Impact Metrics */}
        {item.metrics && (
          <div className="flex flex-wrap gap-4 pt-4">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-border p-3 min-w-[140px] bg-muted/5 group-hover:bg-primary/3 transition-colors rounded-none!"
              >
                <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest mb-1 font-mono">
                  {metric.label}
                </p>
                <p className="text-WHITE_PURE text-lg font-bold font-mono">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Industrial Hardware Accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-border group-hover:border-primary transition-all pointer-events-none" />
    </div>
  );
}
