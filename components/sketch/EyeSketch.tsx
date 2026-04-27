import { NAVY, GOLD } from "@/lib/constants";

const j = (v: number, amt = 1.2) => v + Math.sin(v * 7.3) * amt;

interface EyeSketchProps {
  size?: number;
  color?: string;
  gold?: string;
}

export default function EyeSketch({ size = 120, color = NAVY, gold = GOLD }: EyeSketchProps) {
  const cx = size / 2;
  const cy = size * 0.45;

  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox={`0 0 ${size} ${size * 0.7}`}
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="eye-wash" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={gold} stopOpacity="0.18" />
          <stop offset="60%"  stopColor={gold} stopOpacity="0.09" />
          <stop offset="100%" stopColor={gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={cx} cy={cy} rx={size * 0.38} ry={size * 0.25} fill="url(#eye-wash)" />

      {/* Outer eye contour */}
      <path d={`M${j(4)} ${j(cy)} Q${j(size * 0.25)} ${j(cy - size * 0.28)} ${j(cx)} ${j(cy - size * 0.3)}`} stroke={color} strokeWidth="0.9" fill="none" />
      <path d={`M${j(cx)} ${j(cy - size * 0.3)} Q${j(size * 0.75)} ${j(cy - size * 0.28)} ${j(size - 4)} ${j(cy)}`} stroke={color} strokeWidth="0.9" fill="none" />
      <path d={`M${j(size - 4)} ${j(cy)} Q${j(size * 0.75)} ${j(cy + size * 0.28)} ${j(cx)} ${j(cy + size * 0.3)}`} stroke={color} strokeWidth="0.9" fill="none" />
      <path d={`M${j(cx)} ${j(cy + size * 0.3)} Q${j(size * 0.25)} ${j(cy + size * 0.28)} ${j(4)} ${j(cy)}`} stroke={color} strokeWidth="0.9" fill="none" />

      {/* Iris */}
      <circle cx={j(cx)} cy={j(cy)} r={j(size * 0.15)} stroke={color} strokeWidth="0.8" fill="none" />
      <circle cx={j(cx)} cy={j(cy)} r={j(size * 0.085)} stroke={color} strokeWidth="0.6" fill={gold} fillOpacity="0.15" />

      {/* Pupil */}
      <circle cx={j(cx, 0.4)} cy={j(cy, 0.4)} r={size * 0.042} fill={color} opacity="0.5" />

      {/* Highlight */}
      <circle cx={cx + size * 0.04} cy={cy - size * 0.04} r={size * 0.016} fill={gold} opacity="0.7" />

      {/* Eyelash marks */}
      {Array.from({ length: 5 }, (_, i) => {
        const ang = ((-60 + i * 30) * Math.PI) / 180;
        const r0 = size * 0.3, r1 = size * 0.33;
        return (
          <line
            key={i}
            x1={cx + r0 * Math.cos(ang)} y1={cy + r0 * Math.sin(ang)}
            x2={cx + r1 * Math.cos(ang)} y2={cy + r1 * Math.sin(ang)}
            stroke={color} strokeWidth="0.6" opacity="0.4"
          />
        );
      })}
    </svg>
  );
}
