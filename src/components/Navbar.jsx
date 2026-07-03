"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSONS } from "@/lib/lessons";
import Image from "next/image"

const LESSON_META = {
  purple: { from: "#7C3AED", to: "#A855F7" },
  blue:   { from: "#2563EB", to: "#3B82F6" },
  green:  { from: "#059669", to: "#10B981" },
  orange: { from: "#D97706", to: "#F59E0B" },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full sticky top-0 z-50">
      {/* Emerald & Teal gradient bar */}
      <div
        className="w-full"
        style={{ background: "linear-gradient(90deg, #064E3B 0%, #047857 50%, #0D9488 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 rounded-lg px-1"
          >
            <Image
              src="/logo.png"
              alt="Learn Rohingya Fonna"
              width={32}
              height={32}
              className="rounded-md"
            />
          
            <span className="font-body text-base font-black text-white tracking-tight drop-shadow">
              Learn Rohingya Fonna
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/"         className="nav-link nav-link-active">Home</Link>
            <Link href="/about"    className="nav-link nav-link-default">About</Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-xl hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className={`block w-[18px] h-[2px] bg-white rounded-full transition-all duration-250 origin-center ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[18px] h-[2px] bg-white rounded-full transition-all duration-250 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[18px] h-[2px] bg-white rounded-full transition-all duration-250 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out absolute top-14 left-0 right-0 w-full ${
    isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div
    className="px-4 pt-3 pb-4 shadow-lg" // Added shadow for depth
    style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)" }}
  >
          <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest px-1 mb-2">
            Lessons
          </p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {LESSONS.map((lesson) => {
              const m = LESSON_META[lesson.color] || LESSON_META.purple;
              return (
                <Link
                  key={lesson.id}
                  href={lesson.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur transition-all"
                >
                  <span className="text-base leading-none text-white">{lesson.emoji}</span>
                  <div className="min-w-0">
                    <p className="font-body text-sm font-bold text-white leading-tight truncate">{lesson.title}</p>
                    <p className="font-body text-[10px] text-white/70 leading-tight">{lesson.count} {lesson.id === 4 ? "words" : "letters"}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-white/20 pt-3 flex flex-wrap gap-2">
            {[{ href: "/", label: "🏠 Home" }, { href: "/about", label: "ℹ️ About" }, {href: "/developer", label: "Developer"}, {href: "/contact", label: "Contact"}].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex-1 text-center font-body text-sm font-bold text-white py-2 px-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}