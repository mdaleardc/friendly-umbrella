import Link from "next/link";

export const metadata = {
  title: "About — Learn Rohingya Fonna",
  description:
    "Learn Rohingya Fonna is a free community app for learning the Hanifi Rohingya script.",
};

/* ── Small section card ─────────────────────────────────────── */
function Section({ emoji, title, children }) {
  return (
    <div className="rounded-2xl border-2 border-card-border bg-white/70 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl" aria-hidden="true">{emoji}</span>
        <h2 className="font-body text-base font-black text-ink tracking-tight">
          {title}
        </h2>
      </div>
      <div className="font-body text-sm text-ink-soft leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

/* ── About Page ─────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div dir="ltr" className="flex flex-col min-h-screen bg-sky-bg">

      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-1">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-card-border text-ink text-lg hover:bg-card-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Back to home"
        >
          ←
        </Link>
        <h1 className="font-body text-lg font-black text-ink tracking-tight">
          About
        </h1>
      </div>

      <main className="flex-1 px-4 pt-3 pb-6 flex flex-col gap-4">

        {/* App title card */}
        <div className="rounded-2xl border-2 border-card-border bg-white/70 p-5 flex flex-col items-center text-center gap-3">

          {/* Logo mark */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card border-2 border-card-border">
            <span
              lang="rhg"
              dir="rtl"
              className="rohingya-inline font-rohingya text-[2.2rem] text-ink leading-none select-none"
              aria-hidden="true"
            >
              𐴌
            </span>
          </div>

          <div>
            <p className="font-body text-xl font-black text-ink leading-tight">
              Learn Rohingya Fonna
            </p>
            <p className="font-body text-xs text-ink-soft mt-1">
              Free · Offline · For everyone
            </p>
          </div>

          {/* Hanifi characters decorative row */}
          <div
            dir="rtl"
            className="flex justify-center gap-2 flex-wrap"
            aria-hidden="true"
          >
            {["𐴀","𐴁","𐴂","𐴃","𐴄","𐴅","𐴆","𐴇"].map((ch) => (
              <span
                key={ch}
                lang="rhg"
                dir="rtl"
                className="rohingya-inline font-rohingya text-[1.4rem] text-ink/40 leading-none"
              >
                {ch}
              </span>
            ))}
          </div>

          <p className="font-body text-sm text-ink-soft leading-relaxed">
            A free app built with love for the Rohingya community — so our
            children, wherever they are in the world, can learn to read and
            write their own language.
          </p>
        </div>

        {/* What's inside */}
        <Section emoji="📚" title="What's inside">
          <p>
            Learn Rohingya Fonna teaches the{" "}
            <span className="font-semibold text-ink">Hanifi Rohingya script</span>{" "}
            through four lessons:
          </p>
          <ul className="space-y-1 pt-1">
            {[
              ["📖", "Alphabets", "28 consonants"],
              ["🔤", "Vowels",    "11 vowel signs & tone markers"],
              ["🔢", "Numbers",   "Digits 0–9 in Hanifi script"],
              ["🥭", "Words",     "28 illustrated words, one per letter"],
            ].map(([em, name, desc]) => (
              <li key={name} className="flex items-start gap-2">
                <span aria-hidden="true">{em}</span>
                <span>
                  <span className="font-semibold text-ink">{name}</span>
                  {" — "}{desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="pt-1">
            Tap any card to hear it spoken. Works fully offline after the
            first visit — no internet needed.
          </p>
        </Section>

        {/* Honest note */}
        <Section emoji="💛" title="A note from us">
          <p>
            We are <span className="font-semibold text-ink">not language
            specialists or linguists</span>. We are community members who
            believe our fonna deserves to be learned, remembered, and passed
            on to the next generation.
          </p>
          <p>
            There may be mistakes in the characters, names, pronunciations,
            or words. We are doing our best — and we truly hope you will
            help us do better.
          </p>
          <p>
            If you spot an error or have a correction,{" "}
            <span className="font-semibold text-ink">please reach out</span>.
            Every fix makes this app more accurate for every child who uses
            it.
          </p>
          <p className="font-semibold text-ink pt-1">
            This is for all of us. Let's build it together. 🌱
          </p>
        </Section>



      </main>
    </div>
  );
}
