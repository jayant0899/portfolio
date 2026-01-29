"use client";

import { useEffect, useState } from "react";

export function ChangelogFeed({ logs }: { logs: string[] }) {
  const [opIds, setOpIds] = useState<string[]>([]);

  useEffect(() => {
    // Generate unique Operation IDs on the client
    const newIds = logs.map(
      () =>
        `0x${Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .toUpperCase()
          .padStart(6, "0")}`
    );
    setOpIds(newIds);
  }, [logs]);

  return (
    <div className="space-y-4 font-mono text-[11px]">
      {/* Header with extra technical detail */}
      <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-4">
        <div className="text-muted-foreground font-bold uppercase tracking-[0.2em]">
          // EXECUTION_HISTORY_LOG
        </div>
        <div className="text-[9px] text-secondary-foreground font-bold animate-pulse">
          STATUS: VERIFIED_CORE
        </div>
      </div>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <div
            key={i}
            className="group/log relative flex gap-4 text-muted-foreground hover:text-foreground transition-all duration-200 pl-4"
          >
            {/* Left accent line that appears on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover/log:scale-y-100 transition-transform origin-top duration-300" />

            {/* Binary index + OpID */}
            <div className="flex flex-col shrink-0 min-w-[80px]">
              <span className="text-[8px] text-secondary-foreground font-bold">
                BIT_{i.toString(2).padStart(4, "0")}
              </span>
              <span className="text-secondary-foreground font-bold tracking-tighter">
                {opIds[i] || "0x000000"}
              </span>
            </div>

            {/* The actual experience content */}
            <div className="flex-1 space-y-1">
              <p className="leading-relaxed group-hover/log:translate-x-1 transition-transform">
                {log}
              </p>
              {/* Decorative "Timestamp" */}
              <div className="text-[8px] text-muted-foreground uppercase tracking-widest group-hover/log:text-secondary-foreground transition-colors">
                Event_Logged: {10 + i}:24:0{i}ms_UTC
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
