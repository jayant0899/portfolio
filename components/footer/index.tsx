import React from "react";
import { siteConfig } from "@/config/site-config";
import { userConfig } from "@/config/user-config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Using a fallback for version if not present in siteConfig
  const systemVersion = "1.0.2";

  return (
    <footer className="w-full py-12 px-4  border-t border-border font-mono">
      <div className="container mx-auto space-y-12">
        {/* Top: Navigation Links Mapping */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border/50 pb-12">
          {siteConfig.nav.footer.map((link) => (
            <div key={link.title} className="flex flex-col gap-3">
              <span className="text-[8px] text-primary uppercase tracking-[0.3em] font-bold">
                // RESOURCES
              </span>
              <a
                href={link.href}
                className="text-WHITE_PURE text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors group flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-primary scale-0 group-hover:scale-100 transition-transform" />
                {link.title}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom: Professional Identity & Availability */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left: Branding and Location */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary" />
              <h2 className="text-[10px] text-WHITE_PURE font-bold tracking-[0.2em] uppercase">
                {userConfig.firstName} — Portfolio {currentYear}
              </h2>
            </div>
            <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-widest">
              © {currentYear} All Rights Reserved
            </p>
            <address className="not-italic text-[8px] text-DARK_TEAL font-bold tracking-[0.4em] uppercase">
              {userConfig.address}
            </address>
          </div>

          {/* Right: Build Metadata & Signature */}
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 border-l md:border-l-0 md:border-r border-primary/30 pl-4 md:pl-0 md:pr-4">
              <div className="flex flex-col">
                <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-tighter">
                  VERSION
                </span>
                <span className="text-[10px] text-primary font-bold">
                  {systemVersion}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-tighter">
                  STATUS
                </span>
                <span className="text-[10px] text-WHITE_PURE font-bold uppercase">
                  ACTIVE_FOR_HIRE
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-tighter">
                  SERVER
                </span>
                <span className="text-[10px] text-primary font-bold uppercase animate-pulse">
                  Live
                </span>
              </div>
            </div>

            <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight opacity-70">
              v{systemVersion} | Developed by {userConfig.firstName}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
