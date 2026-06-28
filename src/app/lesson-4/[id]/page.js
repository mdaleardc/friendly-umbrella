import { notFound } from "next/navigation";
import WordDetailCard from "@/components/WordDetailCard";
import words from "@/data/words";
import Link from "next/link";

export function generateStaticParams() {
  return words.map((w) => ({ id: String(w.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = words?.find((w) => w?.id === Number(id));
  if (!item) return { title: "Word — Learn Rohingya Language" };
  return { title: `${item.meaning} · ${item.name} — Learn Rohingya Language` };
}

export default async function WordDetailPage({ params }) {
  const { id } = await params;
  const item = words.find((w) => w.id === Number(id));
  if (!item) notFound();

  const prev = words.find((w) => w.id === Number(id) - 1);
  const next = words.find((w) => w.id === Number(id) + 1);

  return (
    <div dir="ltr" className="flex flex-col min-h-screen" style={{ background: "linear-gradient(145deg,#FFF3E0,#FFF0F5,#F0F4FF)" }}>

      {/* Back breadcrumb */}
      <div className="container mx-auto px-4 pt-4 max-w-sm">
        <Link
          href="/lesson-4"
          className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-full font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-opacity hover:opacity-75"
          style={{ background: "rgba(124,58,237,0.12)", color: "#7C3AED" }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Words
        </Link>
      </div>

      <main className="flex-1 container mx-auto px-4 py-4">
        <WordDetailCard
          item={item}
          prevHref={prev?.id ? `/lesson-4/${prev.id}` : undefined}
          nextHref={next?.id ? `/lesson-4/${next.id}` : undefined}
        />
      </main>
    </div>
  );
}
