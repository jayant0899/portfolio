"use client";

import { Badge } from "@/components/ui/badge";
import { architectureConfig } from "@/config/architecture-config";
import { useEffect, useState } from "react";

export function LogsTerminal() {
  const { categories, globalLogs } = architectureConfig;
  const [isMounted, setIsMounted] = useState(false);
  const [randomHex, setRandomHex] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setRandomHex(
      Math.floor(Math.random() * 1000)
        .toString(16)
        .toUpperCase()
    );
  }, []);

  return (
    <div className="space-y-6 font-mono">
      {/* Header Section - Refined for Dev Portfolio */}
      <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-[0.2em] pb-2 border-b border-border">
        <span>Stack_Architecture</span>
        <span className="text-secondary font-bold">Deployment_v2.5.0</span>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="border border-border bg-muted/5 p-4 rounded-none! space-y-3 group hover:border-primary transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <span className="text-foreground text-xs font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                {cat.title}
              </span>
              <span className="text-[8px] text-primary animate-pulse uppercase font-bold">
                {cat.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-none! font-mono text-[9px] uppercase tracking-tighter group-hover:bg-primary group-hover:text-background transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Sub-terminal - Refined log text */}
            <div className="h-12 w-full bg-background border border-border rounded-none! p-2 overflow-hidden group-hover:border-primary transition-colors">
              <div className="text-[8px] text-muted-foreground animate-[pulse_3s_infinite] leading-relaxed group-hover:text-primary transition-colors">
                <span className="opacity-50">#</span> initializing_module...
                <br />
                <span className="opacity-50">#</span> build_hash: 0x
                {isMounted ? randomHex : "----"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deployment Lifecycle Block */}
      <div className="border border-border bg-muted/20 p-4 rounded-none! text-[10px] h-40 overflow-y-auto relative scrollbar-hide hover:border-primary transition-colors group/global">
        <div className="sticky top-0 right-0 flex justify-end">
          <span className="text-muted-foreground uppercase tracking-widest font-bold bg-muted/20 px-2 group-hover/global:text-primary transition-colors">
            Deployment_Lifecycle
          </span>
        </div>

        <div className="space-y-1.5 mt-2">
          {globalLogs.map((log, index) => (
            <p
              key={index}
              className={`flex gap-2 ${
                log.type === "success"
                  ? "text-foreground font-bold animate-pulse pt-1 border-t border-border mt-1 group-hover/global:border-primary/50"
                  : "text-muted-foreground group-hover/global:text-foreground transition-colors"
              }`}
            >
              <span
                className={`${
                  log.type === "success" ? "text-primary" : "text-secondary"
                } font-bold`}
              >
                {">"}
              </span>
              {log.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}