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

export default async function VerifyPage({ params }) {
  const { id } = await params;
  const cert = getCertificate(id);

  /* ── Not found ── */
  if (!cert) {
    return (
      <div dir="ltr" className="min-h-screen bg-sky-bg flex flex-col items-center justify-center px-4 gap-4 text-center">
        <span className="text-6xl">❌</span>
        <h1 className="font-body text-xl font-black text-ink">
          Certificate Not Found
        </h1>
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

  /* ── Valid — show image only ── */
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-4">

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

      {/* Footer */}
      <p className="font-body text-xs text-ink-soft text-center pb-2">
        rohingyaapp.netlify.app/certificate/{cert.id}
      </p>

    </div>
  );
}
