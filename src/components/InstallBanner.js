"use client";
import { useState, useEffect } from "react";

export default function InstallBanner() {
  const [prompt, setPrompt]   = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setPrompt(e); setVisible(true); };
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-card-border shadow-card-hover max-w-sm w-[calc(100%-2rem)] text-sm font-body">
      <span className="text-2xl">📲</span>
      <p className="text-ink-soft flex-1 leading-tight">Install for offline use</p>
      <button onClick={install} className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        Install
      </button>
      <button onClick={() => setVisible(false)} className="text-ink-soft hover:text-ink transition-colors focus-visible:outline-none rounded" aria-label="Dismiss">✕</button>
    </div>
  );
}
