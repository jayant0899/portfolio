"use client";

import { useEffect, useState, useMemo } from "react";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { formatLocalTime, formatUptime, calculateElapsedSeconds } from "@/lib/utils/time";

interface SystemStatusPanelProps {
  bootTime: number;
}

export function SystemStatusPanel({ bootTime }: SystemStatusPanelProps) {
  const [uptimeSeconds, setUptimeSeconds] = useState(() => calculateElapsedSeconds(bootTime));
  const [currentTime, setCurrentTime] = useState(new Date());

  const formattedUptime = useMemo(() => formatUptime(uptimeSeconds), [uptimeSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptimeSeconds(calculateElapsedSeconds(bootTime));
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [bootTime]);

  return (
    <div className="p-6 border-t border-border/10 bg-muted/5">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Appearance_Mode
          </span>
          <ThemeToggle className="scale-90" />
        </div>

        <div className="space-y-1.5 font-mono text-[9px] uppercase tracking-tighter text-muted-foreground/60">
          <div className="flex justify-between">
            <span>Server_Status:</span>
            <span className="text-primary animate-pulse">Online</span>
          </div>
          
          <div className="flex justify-between">
            <span>Uptime:</span>
            <span className="text-foreground tabular-nums">{formattedUptime}</span>
          </div>

          <div className="flex justify-between">
            <span>Local_Time:</span>
            <span className="text-foreground tabular-nums">{formatLocalTime(currentTime)}</span>
          </div>

          <div className="mt-2 h-1 w-full bg-border/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary/40 w-1/3 animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}