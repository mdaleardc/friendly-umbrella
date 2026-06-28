/**
 * GrassFooter — rolling green hill with a small tree, as seen in the PDF.
 */
export default function GrassFooter() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden select-none pointer-events-none mt-auto"
      style={{ height: 80 }}
    >
      <svg
        viewBox="0 0 375 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full"
      >
        {/* Back hill — darker green */}
        <ellipse cx="187" cy="90" rx="230" ry="55" fill="#5DAA2A" />
        {/* Front hill — lighter green */}
        <ellipse cx="150" cy="100" rx="200" ry="52" fill="#7EC850" />
        {/* Extra bump right */}
        <ellipse cx="340" cy="95" rx="80" ry="38" fill="#6DB840" />

        {/* Tree trunk */}
        <rect x="298" y="30" width="8" height="28" rx="3" fill="#8B5E3C" />
        {/* Tree foliage */}
        <ellipse cx="302" cy="28" rx="18" ry="16" fill="#4A9A20" />
        <ellipse cx="302" cy="20" rx="13" ry="12" fill="#5DAA2A" />

        {/* Small grass tufts */}
        <path d="M60 55 Q63 44 66 55" stroke="#4A8A1A" strokeWidth="2" fill="none"/>
        <path d="M64 55 Q67 42 70 55" stroke="#4A8A1A" strokeWidth="2" fill="none"/>
        <path d="M68 55 Q71 46 74 55" stroke="#4A8A1A" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
}
