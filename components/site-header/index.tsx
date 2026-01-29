import Link from "next/link";
import { SiteHeaderWrapper } from "./SiteHeaderWrapper";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./DesktopNavigation";
import { GithubContributions } from "./GithubContributions";
import { MobileNavSheet } from "./MobileNavSheet";
import { SiteHeaderLogo } from "./SiteHeaderLogo";
import { SiteShareButton } from "./SiteShareButton";
import { getServerBootTime } from "@/lib/server/stats";

export const SiteHeader = () => {
  const bootTime = getServerBootTime();
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 bg-background p-1.5 sm:p-2 max-w-screen overflow-x-hidden"
      )}
    >
      <div
        className="container mx-auto px-2 sm:px-4 border flex gap-1 sm:gap-4 h-11 sm:h-12 items-center"
        data-header-container
      >
        {/* Brand Logo */}
        <Link
          className="has-data-[visible=false]:pointer-events-none shrink-0"
          href="/"
          aria-label="Home"
        >
          <SiteHeaderLogo />
        </Link>

        <div className="flex-1" />

        <DesktopNav items={siteConfig.nav.main} />

        <div className="flex items-center">
          <ThemeToggle />
          <span className="mx-1 sm:mx-2 h-4 w-px bg-border" />

          <div className="hidden sm:flex items-center">
            <GithubContributions />
            <span className="mx-2 h-4 w-px bg-border" />
          </div>

          <SiteShareButton />

          <div className="flex items-center lg:hidden">
            <span className="mx-1 sm:mx-2 h-4 w-px bg-border" />
            <MobileNavSheet bootTime={bootTime} items={siteConfig.nav.main} />
          </div>
        </div>
      </div>
    </SiteHeaderWrapper>
  );
};
