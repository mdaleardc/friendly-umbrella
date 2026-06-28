import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Developer — Learn Rohingya Fonna",
};

export default function DeveloperPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-sm font-body font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        aria-label="Back to home"
      >
        <span>← </span>Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-body text-2xl font-black text-ink tracking-tight">
          Developer
        </h1>
        <p className="font-body text-sm text-ink-soft">
          The person behind Learn Rohingya Fonna
        </p>
      </div>

      {/* Profile card */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5 flex flex-col gap-4">

        {/* Avatar placeholder + name */}
<div className="flex items-center gap-4">
  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-card-border flex-shrink-0">
    <Image
      src="/developer.jpg"
      alt="Mohammed Ismail"
      width={64}
      height={64}
      className="w-full h-full object-cover"
    />
  </div>

  <div>
    <p className="font-body text-lg font-black text-ink leading-tight">
      Mohammed Ismail
    </p>
    <p className="font-body text-xs text-ink-soft mt-0.5">
      Full-Stack Web Developer
    </p>
    <p className="font-body text-xs text-ink-soft">
      Cox's Bazar, Bangladesh
    </p>
  </div>
</div>

{/* Bio */}
<p className="font-body text-sm text-ink-soft leading-relaxed">
  I am a Rohingya full-stack web developer and a primary school teacher at
  Mayaboti Child Learning Centre under UNICEF Mukti in Cox's Bazar,
  Bangladesh. I build educational and community-focused applications to make
  knowledge more accessible. I created{" "}
  <span className="font-semibold text-ink">Learn Rohingya Fonna</span> to help
  Rohingya children and learners around the world read and write the Hanifi
  Rohingya script through a free, offline-friendly, and interactive learning
  experience.
</p>
        {/* Divider */}
        <div className="border-t border-card-border" />

        {/* Stack */}
        <div>
          <p className="font-body text-xs font-black text-ink uppercase tracking-widest mb-2">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Noto Sans Hanifi Rohingya"].map((t) => (
              <span
                key={t}
                className="font-body text-xs font-semibold px-2.5 py-1 rounded-full bg-card border border-card-border text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="border-t border-card-border pt-3">
          <p className="font-body text-xs font-black text-ink uppercase tracking-widest mb-2">
            Other projects
          </p>
          <div className="flex flex-col gap-2">
            {[
              { name: "Myanmar Book Hub",       url: "https://mbsi.vercel.app",          desc: "Free digital educational resources for Myanmar students" },
              { name: "EduBoard",               url: "https://eduboardrp.netlify.app",   desc: "Academic result management for community schools" },
              { name: "VitalDrop",              url: "https://vitaldrop.vercel.app",     desc: "Blood donation platform" },
              { name: "Aurbina Schoolers Hub",  url: "https://ashedui.vercel.app",       desc: "School platform for a Malaysian client" },
              { name: "Portfolio",              url: "https://icodespace.netlify.app",   desc: "icodespace.netlify.app" },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-xl border border-card-border bg-card px-3 py-2.5 hover:bg-card-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-body text-sm font-bold text-ink">{p.name}</span>
                <span className="font-body text-xs text-ink-soft">{p.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
