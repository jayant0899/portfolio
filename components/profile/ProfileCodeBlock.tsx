import { PronounceName } from "./PronounceName";

interface ProfileCodeBlockProps {
  name: string;
  bio: string;
  role: string;
  location: string;
}

export function ProfileCodeBlock({
  name,
  bio,
  role,
  location,
}: ProfileCodeBlockProps) {
  // We define the lines as an array to ensure the line numbers and content are mapped 1:1
  const lines = [
    <>
      <span className="text-purple-500 italic">class</span>{" "}
      <span className="text-primary font-bold">Developer</span> {"{"}
    </>,
    <>
      <span className="text-blue-500 pl-4">name</span>:{" "}
      <span className="text-amber-500">"{name}"</span>;
      <PronounceName className="ml-3 align-baseline hover:scale-110 transition-transform" />
    </>,
    <>
      <span className="text-muted-foreground/40 pl-4 italic">/**</span>
    </>,
    <>
      <span className="text-muted-foreground/40 pl-4 italic">
        &nbsp;* {bio}
      </span>
    </>,
    <>
      <span className="text-muted-foreground/40 pl-4 italic">&nbsp;*/</span>
    </>,
    <>
      <span className="text-blue-500 pl-4">role</span>:{" "}
      <span className="text-amber-500">"{role}"</span>;
    </>,
    <>
      <span className="text-blue-500 pl-4">location</span>:{" "}
      <span className="text-amber-500">"{location}"</span>;
    </>,
    <>
      <span className="text-foreground">{"}"}</span>
    </>,
  ];

  return (
    <div className="font-mono w-full border border-border bg-muted/5 rounded-none! overflow-hidden shadow-2xl flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/20">
        <div className="flex gap-2">
          {/* Industrial Action Squares (Replaced Mac circles) */}
          <div className="w-2.5 h-2.5 bg-red-500/80 rounded-none!" />
          <div className="w-2.5 h-2.5 bg-amber-500/80 rounded-none!" />
          <div className="w-2.5 h-2.5 bg-emerald-500/80 rounded-none!" />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-none! bg-primary animate-pulse" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
            main.ts
          </span>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="relative flex bg-background/50 py-4 text-sm md:text-base leading-[1.6]">
        {/* Fixed Gutter for Line Numbers */}
        <div className="flex flex-col items-end pr-4 pl-4 border-r border-border/10 text-muted-foreground/20 select-none min-w-14">
          {lines.map((_, i) => (
            <span key={i} className="h-[1.6em]">
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex flex-col flex-1 pl-4 overflow-x-auto scrollbar-hide">
          {lines.map((content, i) => (
            <div key={i} className="h-[1.6em] whitespace-nowrap">
              {content}
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Footer / Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 border-t border-border bg-muted/10 text-[9px] text-muted-foreground/50 font-mono">
        <div className="flex gap-4">
          <span>UTF-8</span>
          <span>TypeScript</span>
        </div>
        <div className="flex gap-4">
          <span className="text-primary/60">LN {lines.length}, COL 1</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
