import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { WelcomeToast } from "@/components/toast/WelcomeToast";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh flex flex-col">
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden flex-1">{children}</main>
      <Footer />
      <WelcomeToast />
    </div>
  );
}
