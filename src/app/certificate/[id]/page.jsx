import Link from "next/link";
import Image from "next/image";
import { getCertificate } from "@/data/certificates";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const cert = getCertificate(id);
  return {
    title: cert
      ? `Certificate ${id} — Learn Rohingya Fonna`
      : "Certificate Not Found — Learn Rohingya Fonna",
  };
}

function InfoRow({ label, value }) {
  return (
    <div className="flex gap-2">
      <span className="font-body text-sm font-black text-ink min-w-[140px] flex-shrink-0">
        {label}:
      </span>
      <span className="font-body text-sm text-ink-soft">{value}</span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="font-body text-sm font-black text-ink uppercase tracking-widest pt-1">
      {children}
    </h3>
  );
}

export default async function VerifyPage({ params }) {
  const { id } = await params;
  const cert = getCertificate(id);

  /* ── Not found ── */
  if (!cert) {
    return (
      <div dir="ltr" className="min-h-screen bg-sky-bg flex flex-col items-center justify-center px-4 gap-4 text-center">
        <span className="text-6xl">❌</span>
        <h1 className="font-body text-xl font-black text-ink">Certificate Not Found</h1>
        <p className="font-body text-sm text-ink-soft">
          No certificate matches ID:{" "}
          <span className="font-mono font-bold text-ink">{id}</span>
        </p>
        <Link href="/" className="font-body text-sm font-bold text-accent hover:underline mt-2">
          ← Back to home
        </Link>
      </div>
    );
  }

  /* ── Valid ── */
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-5">

      {/* Back */}
      <Link
        href="/"
        className="font-body text-sm font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none"
      >
        ← Home
      </Link>

      {/* Verified badge */}
      <div className="flex items-center gap-3 rounded-2xl border-2 border-green-300 bg-green-50 px-4 py-3">
        <span className="text-2xl">✅</span>
        <div>
          <p className="font-body text-sm font-black text-green-800">Certificate Verified</p>
          <p className="font-body text-xs text-green-600">ID: {cert.id}</p>
        </div>
      </div>

      {/* Certificate image */}
      <div className="rounded-xl border-2 border-card-border overflow-hidden bg-white shadow-card">
        <Image
          src={`/certificates/${cert.imageFile}`}
          alt={`Certificate ${cert.id}`}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Save button */}
      <DownloadButton imageFile={cert.imageFile} id={cert.id} />

      {/* ── Certificate Description ── */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5 flex flex-col gap-4">

        {/* Overview */}
        <div className="flex flex-col gap-2">
          <SectionTitle>Certificate Overview</SectionTitle>
          <p className="font-body text-sm text-ink-soft leading-relaxed">
            This certificate is issued by{" "}
            <span className="font-semibold text-ink">Learn Rohingya Fonna</span>{" "}
            in recognition of the successful completion of the{" "}
            <span className="font-semibold text-ink">
              Comprehensive Rohingya Language Proficiency Program
            </span>. The program is designed to develop and assess learners'
            proficiency in the Rohingya language through structured instruction
            and practical language use.
          </p>
        </div>

        <div className="border-t border-card-border" />

        {/* Program Details */}
        <div className="flex flex-col gap-3">
          <SectionTitle>Program Details</SectionTitle>
          <InfoRow label="Program"          value="Comprehensive Rohingya Language Proficiency Program" />
          <InfoRow label="Duration"         value="Six (6) Months" />
          <InfoRow label="Study Commitment" value="Approximately 14 instructional hours per week" />
          <InfoRow label="Mode of Study"    value="Online" />
          <InfoRow label="Writing System"   value="Hanifi Rohingya Script" />
        </div>

        <div className="border-t border-card-border" />

        {/* Learning Outcomes */}
        <div className="flex flex-col gap-3">
          <SectionTitle>Learning Outcomes</SectionTitle>
          <p className="font-body text-sm text-ink-soft">
            Upon successful completion, the learner has demonstrated proficiency in:
          </p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Speaking the Rohingya language",
              "Listening and understanding spoken Rohingya",
              "Reading the Hanifi Rohingya script",
              "Writing accurately using the Hanifi Rohingya script",
              "Vocabulary development and practical language communication",
              "Pronunciation and language comprehension",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-ink-soft">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-card-border" />

        {/* Certificate Verification */}
        <div className="flex flex-col gap-2">
          <SectionTitle>Certificate Verification</SectionTitle>
          <p className="font-body text-sm text-ink-soft leading-relaxed">
            This certificate has been officially issued by{" "}
            <span className="font-semibold text-ink">Learn Rohingya Fonna</span>{" "}
            and verified through the{" "}
            <span className="font-semibold text-ink">EduBoard</span>{" "}
            digital credential system. The certificate holder has successfully
            met all program requirements and demonstrated the competencies
            described above.
          </p>
        </div>

        <div className="border-t border-card-border" />

        {/* About */}
        <div className="flex flex-col gap-2">
          <SectionTitle>About Learn Rohingya Fonna</SectionTitle>
          <p className="font-body text-sm text-ink-soft leading-relaxed">
            <span className="font-semibold text-ink">Learn Rohingya Fonna</span>{" "}
            is an educational initiative dedicated to preserving and promoting
            the Rohingya language through accessible, high-quality language
            education. Our mission is to empower learners worldwide by providing
            structured instruction in the Hanifi Rohingya script while
            strengthening proficiency in speaking, listening, reading, and
            writing the Rohingya language.
          </p>
          <p className="font-body text-xs text-ink-soft italic mt-1">
            "Preserving the Rohingya Language through Education"
          </p>
        </div>

      </div>

      {/* Footer note */}
      <p className="font-body text-xs text-ink-soft text-center pb-2">
        rohingyaapp.netlify.app/verify/{cert.id}
      </p>

    </div>
  );
}
