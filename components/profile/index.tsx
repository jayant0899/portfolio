"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import { ProfileCodeBlock } from "./ProfileCodeBlock";
import { userConfig } from "@/config/user-config";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileStatsGrid } from "./ProfileStatsGrid";
import { siteConfig } from "@/config/site-config";
import { TerminalBoot } from "@/components/motion/TerminalBoot";
import Link from "next/link";

export function Profile() {
  return (
    <section className="w-full py-12 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: Identity Block */}
        <div className="lg:col-span-5 space-y-8">
          <TerminalBoot delay={0.1}>
            <ProfileCodeBlock
              name={userConfig.displayName}
              bio={userConfig.bio}
              role={userConfig.jobTitle}
              location={userConfig.address}
            />
          </TerminalBoot>

          <TerminalBoot delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild className="rounded-none! font-mono uppercase tracking-widest">
                <Link href={userConfig.resumeURL} target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download_CV.pdf
                </Link>
              </Button>

              <Button variant="outline" asChild className="rounded-none! font-mono uppercase tracking-widest">
                <Link href={siteConfig.links.github} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View_Github
                </Link>
              </Button>
            </div>
          </TerminalBoot>
        </div>

        {/* MIDDLE: Diagnostic Grid */}
        <div className="lg:col-span-4">
          <TerminalBoot delay={0.3}>
            <ProfileStatsGrid />
          </TerminalBoot>
        </div>

        {/* RIGHT: Biometric/Avatar Block */}
        <div className="lg:col-span-3 flex lg:justify-end justify-center">
          <TerminalBoot delay={0.4}>
            <ProfileAvatar />
          </TerminalBoot>
        </div>
        
      </div>
    </section>
  );
}