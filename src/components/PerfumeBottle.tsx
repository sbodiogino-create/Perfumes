type PerfumeBottleProps = {
  liquidColor: string;
  name: string;
  className?: string;
};

export default function PerfumeBottle({
  liquidColor,
  name,
  className,
}: PerfumeBottleProps) {
  const gradientId = `liquid-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      role="img"
      aria-label={`Frasco de ${name}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liquidColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0b0b0f" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* cap */}
      <rect x="80" y="10" width="40" height="34" rx="4" fill="#d4ff3d" />
      <rect x="88" y="40" width="24" height="18" fill="#8a8a93" />

      {/* neck */}
      <rect x="90" y="56" width="20" height="20" fill="#1a1a22" stroke="#2b2b34" />

      {/* body */}
      <rect
        x="40"
        y="76"
        width="120"
        height="220"
        rx="18"
        fill="#151519"
        stroke="#2b2b34"
        strokeWidth="2"
      />

      {/* liquid fill */}
      <rect
        x="48"
        y="130"
        width="104"
        height="158"
        rx="12"
        fill={`url(#${gradientId})`}
      />

      {/* label */}
      <rect x="52" y="150" width="96" height="50" rx="4" fill="#0b0b0f" opacity="0.55" />
      <text
        x="100"
        y="180"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#f4f2ec"
        fontFamily="var(--font-space-grotesk), sans-serif"
        letterSpacing="1"
      >
        {name}
      </text>

      {/* highlight */}
      <rect x="48" y="86" width="10" height="200" rx="5" fill="#ffffff" opacity="0.06" />
    </svg>
  );
}
