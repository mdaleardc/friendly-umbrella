/**
 * GrassFooter — Responsive rolling green hill with a small tree and rising sun.
 */
export default function GrassFooter() {
  return (
    <footer
      aria-hidden="true"
      className="mt-auto w-full h-24 sm:h-28 md:h-32 lg:h-36 overflow-visible pointer-events-none select-none shrink-0"
    >
      <svg
        viewBox="0 0 375 110"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full"
      >
        {/* Sun glow */}
        <circle cx="70" cy="20" r="14" fill="#FFD700" opacity="0.18">
          <animate
            attributeName="r"
            values="14;18;14"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Sun */}
        <circle cx="70" cy="20" r="10" fill="#FFD700">
          <animate
            attributeName="r"
            values="10;11;10"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Back hill */}
        <ellipse cx="187" cy="108" rx="240" ry="58" fill="#4E9E22" />

        {/* Front hill */}
        <ellipse cx="140" cy="114" rx="210" ry="56" fill="#72C244" />

        {/* Right hill */}
        <ellipse cx="345" cy="110" rx="90" ry="42" fill="#5DAA2A" />

        {/* Tree trunk */}
        <rect
          x="296"
          y="38"
          width="7"
          height="30"
          rx="3"
          fill="#7A5030"
        />

        {/* Tree canopy */}
        <ellipse cx="299" cy="34" rx="20" ry="18" fill="#3D8A18" />
        <ellipse cx="299" cy="26" rx="14" ry="13" fill="#4E9E22" />

        {/* Grass */}
        <path
          d="M52 68 Q55 56 58 68"
          stroke="#3D7A14"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M57 68 Q60 54 63 68"
          stroke="#3D7A14"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M62 68 Q65 58 68 68"
          stroke="#3D7A14"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M168 62 Q171 52 174 62"
          stroke="#3D7A14"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M172 62 Q175 50 178 62"
          stroke="#3D7A14"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </footer>
  );
}