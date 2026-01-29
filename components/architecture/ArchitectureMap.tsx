import { architectureConfig } from "@/config/architecture-config";

export function ArchitectureMap() {
  const { nodes } = architectureConfig;

  return (
    <div className="relative pl-8 py-4 font-mono">
      {/* The Vertical Connection Line - Solid Secondary */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-secondary">
        <div className="absolute top-0 -left-[3px] w-1.5 h-1.5 bg-primary rounded-none!" />
        <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 bg-primary rounded-none!" />
      </div>

      <div className="space-y-8">
        {nodes.map((node, i) => (
          <div key={i} className="relative group">
            {/* Horizontal branch line - Snaps to Primary on hover */}
            <div className="absolute -left-8 top-1/2 w-8 h-px bg-secondary group-hover:bg-primary transition-colors" />

            <div className="border border-border bg-muted/10 p-4 rounded-none! relative overflow-hidden group-hover:border-primary transition-all duration-300">
              {/* Top-right accent square */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-secondary group-hover:bg-primary transition-colors" />

              <div className="space-y-1">
                {/* Label: Using Muted Foreground for high readability */}
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                  {node.label}
                </div>

                {/* Value: Primary highlight */}
                <div className="text-primary text-sm font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                  {node.value}
                </div>

                {/* Instance Status: Improved contrast with Secondary & Primary */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-1 h-1 bg-primary animate-pulse" />
                  <div className="text-[9px] font-bold uppercase tracking-widest">
                    Status: <span className="text-foreground">Online</span>
                  </div>
                </div>

                {/* Sub-detail: Muted but sharp */}
                <div className="text-[9px] text-muted-primary/80 italic border-t border-border mt-2 pt-1">
                  {node.sub}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
