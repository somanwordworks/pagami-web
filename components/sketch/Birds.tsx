import { NAVY, GOLD } from "@/lib/constants";

interface BirdsProps {
  color?: string;
  count?: number;
  x0?: number;
  y0?: number;
  spread?: number;
}

export default function Birds({
  color = NAVY,
  count = 9,
  x0 = 0,
  y0 = 0,
  spread = 280,
}: BirdsProps) {
  const birds = Array.from({ length: count }, (_, i) => {
    const bx = x0 + (i * spread) / count + Math.sin(i * 2.3) * 18;
    const by = y0 + Math.cos(i * 1.7) * 22 - i * 2;
    const s = 0.6 + Math.sin(i) * 0.3;
    return { bx, by, s };
  });

  return (
    <g opacity="0.75">
      {birds.map(({ bx, by, s }, i) => (
        <g key={i} transform={`translate(${bx},${by}) scale(${s})`}>
          <path d="M0,0 Q-4,-3 -7,0" stroke={color} strokeWidth="0.9" fill="none" />
          <path d="M0,0 Q4,-3 7,0"  stroke={color} strokeWidth="0.9" fill="none" />
        </g>
      ))}
    </g>
  );
}
