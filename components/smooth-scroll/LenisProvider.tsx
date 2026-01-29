"use client";
import gsap from "gsap";
import { ReactLenis, LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  // Use the exported LenisRef type for the ref
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // The 'time' argument from gsap.ticker is in seconds
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
