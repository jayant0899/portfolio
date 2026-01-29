import { TerminalBoot } from "@/components/motion/TerminalBoot";
import { architectureConfig } from "@/config/architecture-config";
import { ArchitectureMap } from "./ArchitectureMap";
import { LogsTerminal } from "./LogsTerminal";

export function Architecture() {
  const { content } = architectureConfig;

  return (
    <section id="architecture" className="w-full py-12 px-4 border-b border-border">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: System Map (Col 1-5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-primary font-mono text-xl font-bold tracking-[0.3em] uppercase">
              {content.heading}
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>

          <TerminalBoot delay={0.2}>
            <ArchitectureMap />
          </TerminalBoot>

          <div className="pt-8 space-y-4 font-mono">
            <h3 className="text-foreground text-2xl font-bold uppercase tracking-tight">
              {content.subheading}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              {content.description}
            </p>
          </div>
        </div>

        {/* RIGHT: Logs & Nodes (Col 6-12) */}
        <div className="lg:col-span-7">
           <TerminalBoot delay={0.4}>
             <LogsTerminal />
           </TerminalBoot>
        </div>

      </div>
    </section>
  );
}