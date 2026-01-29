"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { userConfig } from "@/config/user-config";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/site-config";
import { MobileNavList } from "./MobileNavList";
import { SiteHeaderLogo } from "./SiteHeaderLogo";
import { SystemStatusPanel } from "./SystemStatusPanel";

export function MobileNavSheet({
  items,
  className,
  bootTime,
}: {
  items: NavItem[];
  className?: string;
  bootTime: number;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group/toggle flex flex-col gap-1 items-center justify-center",
            className
          )}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-full sm:w-80 p-0 bg-background border-r border-border/50 flex flex-col"
      >
        <div className="h-12 border-b border-border/50 flex items-center px-4 my-2">
          <SheetClose asChild>
            <Link href="/" aria-label="Home">
              <SiteHeaderLogo />
            </Link>
          </SheetClose>
        </div>

        <SheetHeader className="sr-only">
          <SheetTitle>Site Navigation</SheetTitle>
          <SheetDescription>
            Browse sections and recent activity
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          <div onClick={() => setOpen(false)}>
            <MobileNavList items={items} activeId={pathname} />
          </div>
        </div>

        {/* Clean & Modular Nerdy Section */}
        <SystemStatusPanel bootTime={bootTime} />

        <div className="p-4 border-t border-border/10 bg-muted/10">
          <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em] text-center">
            &copy; {new Date().getFullYear()} //{" "}
            {userConfig.firstName.toLowerCase()}.sys
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
