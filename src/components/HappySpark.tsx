export default function HappySpark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="PULSO, con una sonrisa">
      <defs>
        <radialGradient id="spark-face" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#B26BFF" />
          <stop offset="100%" stopColor="#6B2FFF" />
        </radialGradient>
      </defs>

      {/* rayos */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const long = i % 2 === 0;
        const r1 = 128;
        const r2 = long ? 178 : 156;
        const x1 = 200 + Math.cos(angle) * r1;
        const y1 = 200 + Math.sin(angle) * r1;
        const x2 = 200 + Math.cos(angle) * r2;
        const y2 = 200 + Math.sin(angle) * r2;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4FF3D"
            strokeWidth={long ? 6 : 4}
            strokeLinecap="round"
            opacity={0.9}
          />
        );
      })}

      {/* cara */}
      <circle cx="200" cy="200" r="118" fill="url(#spark-face)" />

      {/* mejillas */}
      <ellipse cx="140" cy="218" rx="16" ry="10" fill="#D4FF3D" opacity="0.55" />
      <ellipse cx="260" cy="218" rx="16" ry="10" fill="#D4FF3D" opacity="0.55" />

      {/* ojos felices (curvas ^ ^) */}
      <path d="M128 178 Q145 160 162 178" stroke="#0B0B0F" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M238 178 Q255 160 272 178" stroke="#0B0B0F" strokeWidth="9" strokeLinecap="round" fill="none" />

      {/* sonrisa grande */}
      <path
        d="M132 222 Q200 288 268 222"
        stroke="#0B0B0F"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* chispitas flotando */}
      <g fill="#D4FF3D">
        <circle cx="72" cy="96" r="7" />
        <circle cx="336" cy="120" r="5" />
        <circle cx="92" cy="320" r="5" />
        <circle cx="322" cy="300" r="7" />
      </g>
      <g fill="#F4F2EC">
        <circle cx="60" cy="230" r="4" />
        <circle cx="344" cy="220" r="4" />
      </g>
    </svg>
  );
}
