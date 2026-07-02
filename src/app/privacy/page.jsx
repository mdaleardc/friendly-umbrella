import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Learn Rohingya Fonna",
  description: "Privacy Policy for Learn Rohingya Fonna.",
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-body text-xs text-ink-soft">
          Last updated: July 2025
        </p>
      </div>

      {/* Summary badge */}
      <div className="flex items-start gap-3 rounded-2xl border-2 border-green-300 bg-green-50 px-4 py-3">
        <span className="text-xl flex-shrink-0">🔒</span>
        <p className="font-body text-sm text-green-800 leading-relaxed">
          <span className="font-black">Simple version:</span> We collect nothing.
          No account. No tracking. No personal data. Ever.
        </p>
      </div>

      {/* Sections */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5 flex flex-col gap-5">

        <Section title="1. Who We Are">
          <p>
            Learn Rohingya Fonna is a free educational app developed by
            Myanmar Book Hub — a community initiative for the Rohingya community.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="2. Data We Do NOT Collect">
          <p>We do not collect, store, or share:</p>
          <ul className="space-y-1 pt-1">
            {[
              "Your name or email address",
              "Your location or IP address",
              "Your device information",
              "Your usage behaviour or analytics",
              "Any cookies or tracking identifiers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="3. Certificate Verification">
          <p>
            The certificate verification system at{" "}
            <span className="font-mono text-xs text-ink">
              rohingyaapp.netlify.app/verify/[ID]
            </span>{" "}
            only displays a certificate image when a valid ID is provided.
            No personal data is logged or stored when someone visits a
            verification page.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="4. Third-Party Services">
          <p>
            The App is hosted on <span className="font-semibold text-ink">Netlify</span>.
            Netlify may collect basic server logs (such as IP addresses) as part of
            their standard hosting infrastructure. We do not access or use this data.
            Please refer to{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Netlify's Privacy Policy
            </a>{" "}
            for details.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="5. Children's Privacy">
          <p>
            This App is designed for children and families. We intentionally
            collect zero data to ensure the App is safe for learners of all ages.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="6. Changes to This Policy">
          <p>
            If we ever change this policy, we will update the date at the top of
            this page. We will never start collecting data without clearly informing
            users first.
          </p>
        </Section>

        <div className="border-t border-card-border" />

        <Section title="7. Contact">
          <p>
            Questions about this policy? Visit our{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Contact page
            </Link>.
          </p>
        </Section>

      </div>

      {/* Footer links */}
      <div className="flex items-center justify-center gap-4 pb-4">
        <Link href="/terms" className="font-body text-xs text-accent hover:underline">
          Terms of Service
        </Link>
        <span className="text-ink-soft text-xs">·</span>
        <Link href="/" className="font-body text-xs text-ink-soft hover:text-ink">
          Home
        </Link>
      </div>

    </div>
  );
}
