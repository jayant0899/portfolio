interface ProjectHeaderProps {
  heading: string;
}

export function ProjectHeader({ heading }: ProjectHeaderProps) {
  return (
    <div className="lg:col-span-5 space-y-8 mb-16 font-mono">
      <div className="space-y-2">
        <h2 className="text-primary text-xl font-bold tracking-[0.3em] uppercase">
          {heading}
        </h2>
        <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-1.5 h-1.5 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
          Active_Resource_Registry
        </p>
      </div>
    </div>
  );
}