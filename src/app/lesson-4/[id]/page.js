import { notFound } from "next/navigation";
import WordDetailCard from "@/components/WordDetailCard";
import words from "@/data/words";
import Link from "next/link";

export function generateStaticParams() {
  return words.map((w) => ({ id: String(w.id) }));
}

export function generateMetadata({ params }) {
  const item = words?.find((w) => w?.id === Number(params?.id));
  if (!item) return { title: "Word — Learn Rohingya Language" };
  return { title: `${item.meaning} · ${item.name} — Learn Rohingya Language` };
}

export default function WordDetailPage({ params }) {
  const id = Number(params.id);
  const item = words.find((w) => w.id === id);
  if (!item) notFound();

  const prev = words.find((w) => w.id === id - 1);
  const next = words.find((w) => w.id === id + 1);

  return (
    <div dir="ltr" className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 container mx-auto px-4 py-6">

        {/* Word detail card */}
        <WordDetailCard
          item={item}
          prevHref={prev?.id ? `/lesson-4/${prev.id}` : undefined}
          nextHref={next?.id ? `/lesson-4/${next.id}` : undefined}
        />
      </main>
    </div>
  );
}