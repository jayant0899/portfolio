"use client";

import { useSound } from "@/hooks/useSound";
import { userConfig } from "@/config/user-config";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function PronounceName({ className }: { className?: string }) {
  const play = useSound(userConfig.namePronunciationUrl);

  if (!userConfig.namePronunciationUrl) return null;

  return (
    <button
      onClick={() => play()}
      className={cn(
        "inline-flex items-center justify-center size-5 ml-2 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer",
        className
      )}
      aria-label="Pronounce name"
    >
      <Volume2 className="h-3.5 w-3.5" />
    </button>
  );
}
