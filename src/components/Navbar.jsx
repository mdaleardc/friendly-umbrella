"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSONS } from "@/lib/lessons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and app name */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <span className="text-2xl">📚</span>
          <h1 className="font-body text-lg font-black text-ink tracking-tight">
            Learn Rohingya
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-xl hover:bg-gray-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="font-body text-sm font-semibold text-ink hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-body text-sm font-semibold text-ink-soft hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/progress" className="font-body text-sm font-semibold text-ink-soft hover:text-accent transition-colors">
            Progress
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown with lessons */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-gray-200/50">
          {/* Lessons navigation – first (top) */}
          <div>
            <p className="font-body text-xs font-semibold text-ink-soft uppercase tracking-wider px-3 mb-2">
              Lessons
            </p>
            <div className="flex flex-col gap-1">
              {LESSONS.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={lesson.href}
                  className="font-body text-sm font-medium text-ink py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <span className="text-lg">{lesson.emoji}</span>
                  <span>{lesson.title}</span>
                  <span className="text-xs text-ink-soft ml-auto">
                    {lesson.count} {lesson.id === 4 ? 'words' : 'letters'}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider line between Lessons and Main navigation */}
          <div className="border-b border-gray-200/50 my-3"></div>

          {/* Main navigation – second (below) */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="font-body text-sm font-semibold text-ink py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link
              href="/about"
              className="font-body text-sm font-semibold text-ink-soft py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
            >
              ℹ️ About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}