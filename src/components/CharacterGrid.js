import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ items, lessonHref }) {
  return (
    <section
      dir="rtl"
      aria-label="Characters"
      className="flex flex-wrap justify-center gap-2.5 px-2 pb-6"
    >
      {items.map((item, i) => (
        <div key={item.id} className="w-[22%] max-w-[90px]">
          <CharacterCard
            item={item}
            index={i}
            showName={true}
            href={lessonHref ? `${lessonHref}/${item.id}` : undefined}
          />
        </div>
      ))}
    </section>
  );
}
