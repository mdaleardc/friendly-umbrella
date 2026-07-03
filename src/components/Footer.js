import Link from "next/link";
import Image from "next/image";

/**
 * AppFooter — Professional pure JSX footer.
 * Clean, minimal, child-friendly colour accent.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      dir="ltr"
      className="mt-auto w-full border-t border-card-border bg-white/60 backdrop-blur-sm"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-accent to-purple-400" />

      <div className="max-w-lg mx-auto px-4 py-5 flex flex-col gap-4">

        {/* Brand row */}
        <div className="flex items-center justify-between">

          {/* Logo + name */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                className="rounded-md"
                src="/logo.png"
                alt="Learn Rohingya Fonna"
                width={30}
                height={30}
              />
            </div>
            <div>
              <p className="font-body text-xs font-black text-ink leading-none">
                Learn Rohingya Fonna
              </p>
              <p className="font-body text-[10px] text-ink-soft mt-0.5">
                <a href="https://eduboardrp.netlify.app" target="_blank">EduBoard</a> • <a href="https://mbsi.vercel.app" target="_blank">Myanmar Book Hub</a>
              </p>
            </div>
          </div>

          {/* Tag */}
          <span className="font-body text-[10px] font-semibold px-2 py-1 rounded-full bg-card border border-card-border text-ink-soft">
            Free · Open
          </span>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-4 gap-y-1"
        >
          {[
            { label: "Home",      href: "/" },
            { label: "About",     href: "/about" },
            { label: "Developer", href: "/developer" },
            { label: "Contact",   href: "/contact" },
            { label: "Privacy",   href: "/privacy" },
            { label: "Terms",   href: "/terms" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs text-ink-soft hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-card-border" />

        {/* Copyright */}
        <div className="flex items-center justify-between flex-wrap gap-1">
          <p className="font-body text-[10px] text-ink-soft">
            © {year} Learn Rohingya Fonna · EduBoard
          </p>
        </div>

      </div>
    </footer>
  );
}
