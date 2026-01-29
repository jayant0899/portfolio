import { useEffect, useRef, useCallback } from "react";

export function useSound(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.preload = "auto";
    audioRef.current = audio;
  }, [url]);

  const play = useCallback((volume: number = 1) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.currentTime = 0;

    audio.play().catch((err) => {
      console.error("[useSound] Play failed:", err);
    });
  }, []);

  return play;
}
