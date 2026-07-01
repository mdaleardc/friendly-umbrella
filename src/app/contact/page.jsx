import Link from "next/link";

export const metadata = {
  title: "Contact — Learn Rohingya Fonna",
};

const CONTACTS = [
  {
    icon: "💬",
    label: "Facebook",
    handle: "rohingyafonna",
    url: "https://m.facebook.com/mdaismail.it",
    note: "Fastest response",
  },
  {
    icon: "🐦",
    label: "Twitter / X",
    handle: "rohingyafonna",
    url: "https://x.com/MdIsmail5851415",
    note: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    handle: "rohingyafonna",
    url: "https://www.linkedin.com/in/mohammed-ismail-601457217/",
    note: null,
  },
  {
    icon: "📧",
    label: "Email",
    handle: "rohingyafonna",   // ← replace
    url: "mailto: ismailmd.code@gmail.com",
    note: null,
  },
];

export default function ContactPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-body font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        aria-label="Back to home"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-body text-2xl font-black text-ink tracking-tight">
          Contact
        </h1>
        <p className="font-body text-sm text-ink-soft">
          Corrections, feedback, or just say hello
        </p>
      </div>

      {/* Note */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5">
        <p className="font-body text-sm text-ink-soft leading-relaxed">
          We are not language specialists. If you find a mistake in a character,
          pronunciation, or word — please reach out. Every correction helps
          every child who uses this app. 💛
        </p>
      </div>

      {/* Contact links */}
      <div className="flex flex-col gap-3">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.url}
            target={c.url.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border-2 border-card-border bg-white/80 px-4 py-4 hover:bg-card hover:border-accent/40 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
          >
            {/* Icon */}
            <span className="text-2xl select-none flex-shrink-0" aria-hidden="true">
              {c.icon}
            </span>

            {/* Labels */}
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-black text-ink leading-tight">
                {c.label}
              </p>
              <p className="font-body text-xs text-ink-soft truncate">
                {c.handle}
              </p>
            </div>

            {/* Note badge */}
            {c.note && (
              <span className="font-body text-[10px] font-semibold px-2 py-0.5 rounded-full bg-card border border-card-border text-ink-soft flex-shrink-0">
                {c.note}
              </span>
            )}

            {/* Arrow */}
            <span
              className="text-ink-soft group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
