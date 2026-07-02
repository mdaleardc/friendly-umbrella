import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Learn Rohingya Fonna",
  description: "Terms of Service for Learn Rohingya Fonna.",
};

function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-body text-sm font-black text-ink">{title}</h2>
      <div className="font-body text-sm text-ink-soft leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link
        href="/"
        className="font-body text-sm font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-body text-2xl font-black text-ink tracking-tight">
          Terms of Service
        </h1>
        <p className="font-body text-xs text-ink-soft">
          Last updated: July 2025
        </p>
      </div>

      {/* Intro card */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5">
        <p className="font-body text-sm text-ink-soft leading-relaxed">
          By using <span className="font-semibold text-ink">Learn Rohingya Fonna</span> ("the App"),
          you agree to these terms. Please read them carefully. If you do not agree,
          please do not use the App.
        </p>
      </div>

      {/* Sections */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5 flex flex-col gap-5">

        <Section title="1. About the App">
          <p>
            Learn Rohingya Fonna is a free educational app for learning the Hanifi
            Rohingya script — alphabets, vowels, numbers, and words. It is developed
            and maintained by Myanmar Book Hub as a community service.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="2. Free to Use">
          <p>
            The App is completely free. No account, subscription, or payment is
            required. We do not charge for any current features.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="3. Educational Purpose">
          <p>
            All content in this App is intended for educational and cultural
            preservation purposes only. We are community members, not certified
            language specialists. Content may contain errors — we welcome corrections
            from the community.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="4. Certificates">
          <p>
            Certificates issued through Learn Rohingya Fonna are awarded in
            recognition of program completion. They are community certificates
            and are not accredited by any government or official body. Certificates
            can be verified at{" "}
            <span className="font-mono text-xs text-ink">
              rohingyaapp.netlify.app/verify/[ID]
            </span>.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="5. Intellectual Property">
          <p>
            All app content — including text, design, and audio — belongs to
            Myanmar Book Hub unless otherwise stated. The Noto Sans Hanifi Rohingya
            font is used under the SIL Open Font License.
          </p>
          <p>
            You may not copy, redistribute, or sell any part of this App without
            written permission.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="6. No Warranty">
          <p>
            The App is provided "as is" without any warranty. We do our best to
            keep content accurate and the app running smoothly, but we cannot
            guarantee it will always be error-free or available.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="7. Changes to These Terms">
          <p>
            We may update these terms from time to time. Continued use of the App
            after changes means you accept the updated terms.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="8. Contact">
          <p>
            For questions about these terms, please visit our{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Contact page
            </Link>.
          </p>
        </Section>

      </div>

      {/* Footer links */}
      <div className="flex items-center justify-center gap-4 pb-4">
        <Link href="/privacy" className="font-body text-xs text-accent hover:underline">
          Privacy Policy
        </Link>
        <span className="text-ink-soft text-xs">·</span>
        <Link href="/" className="font-body text-xs text-ink-soft hover:text-ink">
          Home
        </Link>
      </div>

    </div>
  );
}
