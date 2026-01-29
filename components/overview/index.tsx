"use client";

import React, { useEffect, useState } from "react";
import { userConfig } from "@/config/user-config";
import { useIsClient } from "@/hooks/useIsClient";
import { decodeEmail, decodePhoneNumber } from "@/lib/utils/string";

export function Overview() {
  const isClient = useIsClient();
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    if (!isClient) return;

    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: userConfig.timeZone,
        hour12: false,
      }).format(new Date());
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isClient]);

  const emailDecoded = isClient
    ? decodeEmail(userConfig.email)
    : "LOCKED_SIGNAL";
  const phoneDecoded = isClient
    ? decodePhoneNumber(userConfig.phoneNumber)
    : "LOCKED_SIGNAL";

  const overviewData = [
    { label: "CHRONO_TRACK", value: currentTime || "00:00:00", status: "LIVE" },
    { label: "GEOSPATIAL_BASE", value: userConfig.address, status: "STABLE" },
    {
      label: "NETWORK_DOMAIN",
      value: userConfig.website.replace("https://", ""),
      status: "ONLINE",
      href: userConfig.website,
    },
    {
      label: "COMMS_PRIMARY",
      value: emailDecoded,
      status: isClient ? "DECODED" : "ENCRYPTED",
      href: isClient ? `mailto:${emailDecoded}` : undefined,
    },
    {
      label: "COMMS_SECURE",
      value: phoneDecoded,
      status: isClient ? "DECODED" : "ENCRYPTED",
      href: isClient ? `tel:${phoneDecoded.replace(/\s+/g, "")}` : undefined,
    },
    { label: "ZONE_ID", value: userConfig.timeZone, status: "SYNCED" },
  ];

  return (
    <section id="overview" className="w-full py-12 px-4 border-b border-border">
      <div className="container mx-auto">
        {/* Top Header Bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
              Telemetry_Dashboard // {userConfig.displayName.replace(" ", "_")}
            </span>
          </div>
          <span className="text-muted-foreground text-[9px] font-bold">
            V3.0.2
          </span>
        </div>

        {/* Overview Grid - Clamped and Border-Corrected */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {overviewData.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-border sm:border-r last:border-b-0 sm:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 p-5 hover:bg-primary/5 transition-all group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-muted-foreground text-[8px] font-bold tracking-widest uppercase">
                  {item.label}
                </span>
                <span
                  className={`text-[7px] font-bold px-1.5 py-0.5 border ${
                    item.status === "LIVE" || item.status === "ONLINE"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground text-[13px] font-bold uppercase truncate group-hover:text-primary transition-colors block"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground text-[13px] font-bold uppercase truncate group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Trace Line */}
        <div className="px-4 py-2 flex items-center gap-4 bg-muted/5 border-t border-border">
          <span className="text-[8px] text-muted-foreground font-bold tracking-[0.2em] uppercase whitespace-nowrap">
            System_Status: Operational
          </span>
          <div className="h-px flex-1 bg-border/30" />
          <div className="flex gap-4">
            <span className="text-[8px] text-primary font-bold uppercase whitespace-nowrap">
              Latency: 14ms
            </span>
            <span className="text-[8px] text-primary font-bold uppercase whitespace-nowrap">
              Uptime: 99.9%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
