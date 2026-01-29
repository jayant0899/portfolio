"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";
import { ShareIcon } from "@/components/animated-icons/Share";

export function SiteShareButton({ className }: { className?: string }) {
  const [, copy] = useCopyToClipboard();

  function handleCopy() {
    copy(window.location.href)
      .then(() => {
        toast.success("Link copied", {
          description: "The page URL is now in your clipboard.",
        });
      })
      .catch(() => {
        toast.error("Copy failed", {
          description: "Could not copy the link.",
        });
      });
  }

  return (
    <button
      className={cn(
        "flex items-center justify-center p-2 hover:bg-muted/80 transition-colors",
        className
      )}
      onClick={handleCopy}
      aria-label="Share this page"
    >
      <ShareIcon size={14} />
      <span className="sr-only">Share</span>
    </button>
  );
}
