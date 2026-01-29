import { LenisProvider } from "@/components/smooth-scroll/LenisProvider";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LenisProvider>{children}</LenisProvider>
      </ThemeProvider>
      <Toaster />
    </>
  );
};
