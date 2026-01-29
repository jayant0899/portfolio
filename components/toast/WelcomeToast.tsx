"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userConfig } from "@/config/user-config";

export function WelcomeToast() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.custom(
        (t) => (
          <div className="w-full md:w-[400px] bg-background border border-primary p-4 font-mono flex flex-col gap-4 relative overflow-hidden">
            {/* Subtle scan line */}
            <div className="absolute top-0 left-0 w-full h-px bg-primary opacity-40" />

            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                  // Welcome
                </p>
                <h4 className="text-WHITE_PURE text-sm font-bold uppercase">
                  Portfolio Loaded
                </h4>
              </div>
              <button
                onClick={() => toast.dismiss(t)}
                className="text-muted-foreground hover:text-primary text-[10px]"
              >
                [X]
              </button>
            </div>

            <p className="text-muted-foreground text-[11px] leading-relaxed">
              You’re viewing the portfolio of{" "}
              <span className="text-WHITE_PURE font-semibold">
                {userConfig.displayName}
              </span>
              , a QA Automation Engineer focused on building reliable test
              automation frameworks and CI/CD-driven quality systems.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  router.push("/#contact");
                  toast.dismiss(t);
                }}
                className="flex-1 bg-primary text-[10px] font-bold py-2 px-4 uppercase hover:brightness-110 transition-all"
              >
                Contact
              </button>
              <button
                onClick={() => toast.dismiss(t)}
                className="flex-1 border border-border text-WHITE_PURE text-[10px] font-bold py-2 px-4 uppercase hover:bg-white/5 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity,
          position: "bottom-right",
        }
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
