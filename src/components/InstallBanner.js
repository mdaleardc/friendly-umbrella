"use client";
import { useState, useEffect } from "react";

export default function InstallBanner() {
  const [prompt, setPrompt]   = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setPrompt(e); setVisible(true); console.log("beforeinstallprompt fired"); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!prompt) return;
    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm animate-slide-down">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{
          background: "linear-gradient(135deg,#7C3AED,#A855F7)",
          boxShadow: "0 8px 28px rgba(124,58,237,0.40)",
        }}
      >
        <span className="text-2xl flex-shrink-0">📲</span>
        <div className="flex-1 min-w-0">
          <p className="font-body text-sm font-black text-white leading-tight">Install app</p>
          <p className="font-body text-xs text-white/70 leading-tight">Use offline, anytime</p>
        </div>
        <button
          onClick={install}
          className="flex-shrink-0 bg-white text-purple-700 text-xs font-black px-3 py-1.5 rounded-xl hover:bg-purple-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white font-body"
        >
          Install
        </button>
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors focus-visible:outline-none"
          aria-label="Dismiss"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
