"use client";

export default function DownloadButton({ imageFile, id }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/certificates/${imageFile}`;
    link.download = `certificate-${id}.png`;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center justify-center gap-2 w-full rounded-2xl border-2 border-card-border bg-white/80 px-4 py-3 font-body text-sm font-bold text-ink hover:bg-card hover:border-accent/40 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span aria-hidden="true">⬇️</span>
      Save Certificate
    </button>
  );
}
