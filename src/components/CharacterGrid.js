import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ items, lessonHref }) {
  return (
    <section
    dir="rtl"
      aria-label="Characters"
      className="grid grid-cols-4 md:grid-cols-5 justify-center items-center gap-3 px-4 pb-4"
    >
      {items.map((item, i) => (
        <CharacterCard
          key={item.id}
          item={item}
          index={i}
          showName={true}
          href={lessonHref ? `${lessonHref}/${item.id}` : undefined}
        />
      ))}
    </section>
  );
}
