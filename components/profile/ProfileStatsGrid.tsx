"use client";


export function ProfileStatsGrid() {
  const metrics = [
    { label: "Queue_Status", value: "OPTIMAL", desc: "WORKERS_ACTIVE" },
    { label: "API_Health", value: "99.9%", desc: "LATENCY < 40MS" },
    { label: "Network_Lat", value: "12MS", desc: "EDGE_NODES_UP" },
    { label: "Active_Nodes", value: "04", desc: "DISTRIBUTED_SYS" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 relative">
      {metrics.map((m) => (
        <div 
          key={m.label} 
          className="group relative p-3 border border-border bg-muted/5 rounded-none! overflow-hidden transition-colors hover:bg-muted/10"
        >
          {/* Corner Accent - Top Right (Nerdy detail) */}
          <div className="absolute top-0 right-0 w-1 h-1 bg-primary/40 group-hover:bg-primary transition-colors" />
          
          <div className="space-y-1.5 relative z-10">
            {/* Header with mini "status" dot */}
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-primary animate-pulse" />
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest leading-none">
                {m.label}
              </span>
            </div>

            {/* Value with tabular-nums for alignment */}
            <div className="text-primary font-mono text-sm tracking-tighter tabular-nums font-bold">
              {m.value}
            </div>

            {/* Footer Desc with a console-style prompt */}
            <div className="flex items-center gap-1">
              <span className="text-primary/30 text-[7px] font-mono">{">"}</span>
              <span className="text-[8px] font-mono text-muted-foreground/40 uppercase tracking-tighter whitespace-nowrap">
                {m.desc}
              </span>
            </div>
          </div>

          {/* Micro Background Progress Bar (Nerdy aesthetic) */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-border/20">
             <div className="h-full bg-primary/20 w-1/2 group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
  );
}