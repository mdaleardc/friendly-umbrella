"use client";
import { useRef, useCallback } from "react";

export function useAudio() {
  const current = useRef(null);

  const play = useCallback((src) => {
    if (current.current) {
      current.current.pause();
      current.current.currentTime = 0;
    }
    const audio = new Audio(src);
    current.current = audio;
    audio.play().catch(() => {});
  }, []);

  return { play };
}
