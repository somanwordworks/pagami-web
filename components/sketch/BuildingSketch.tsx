import { NAVY, GOLD } from "@/lib/constants";
import Birds from "./Birds";
import WashBlob from "./WashBlob";

const j = (v: number, amt = 1.2) => v + Math.sin(v * 7.3) * amt;

interface HatchProps {
  x: number; y: number; w: number; h: number;
  angle?: number; spacing?: number; color?: string; opacity?: number;
}

function Hatch({ x, y, w, h, angle = 45, spacing = 5, color = NAVY, opacity = 0.18 }: HatchProps) {
  const lines: React.ReactNode[] = [];
  const len = Math.sqrt(w * w + h * h) * 2;
  const steps = Math.floor(len / spacing);
  for (let i = -steps; i < steps; i++) {
    const offset = i * spacing;
    const rad = (angle * Math.PI) / 180;
    const cx2 = x + w / 2, cy2 = y + h / 2;
    const dx = Math.cos(rad + Math.PI / 2) * len;
    const dy = Math.sin(rad + Math.PI / 2) * len;
    const ox = Math.cos(rad) * offset;
    const oy = Math.sin(rad) * offset;
    lines.push(
      <line key={i}
        x1={cx2 + ox - dx / 2} y1={cy2 + oy - dy / 2}
        x2={cx2 + ox + dx / 2} y2={cy2 + oy + dy / 2}
        stroke={color} strokeWidth="0.5" opacity={opacity}
      />
    );
  }
  return <g>{lines}</g>;
}

interface BuildingSketchProps {
  width?: number;
  height?: number;
  color?: string;
  gold?: string;
}

export default function BuildingSketch({
  width = 520,
  height = 540,
  color = NAVY,
  gold = GOLD,
}: BuildingSketchProps) {
  const lw = 0.9;
  const h = height;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      {/* Gold wash */}
      <WashBlob id="b1" x={width * 0.48} y={h * 0.38} rx={width * 0.38} ry={h * 0.38} color={gold} opacity={0.18} />
      <WashBlob id="b2" x={width * 0.52} y={h * 0.52} rx={width * 0.22} ry={h * 0.2}  color={gold} opacity={0.10} />
      <WashBlob id="b3" x={width * 0.4}  y={h * 0.1}  rx={width * 0.28} ry={h * 0.14} color={color} opacity={0.04} />

      {/* Birds */}
      <Birds color={color} count={11} x0={width * 0.1} y0={h * 0.07} spread={width * 0.7} />
      <Birds color={color} count={5}  x0={width * 0.25} y0={h * 0.14} spread={width * 0.4} />

      {/* Ground */}
      <line x1={j(20)} y1={j(h * 0.82)} x2={j(width - 20)} y2={j(h * 0.82, 0.8)} stroke={color} strokeWidth={lw} opacity="0.35" />
      {[0,1,2,3].map(i => (
        <line key={i} x1={j(30 + i * 8)} y1={j(h * 0.83 + i * 6)} x2={j(width - 30 - i * 5)} y2={j(h * 0.83 + i * 6, 0.7)}
          stroke={color} strokeWidth="0.4" opacity={0.12 - i * 0.02} />
      ))}

      {/* Main tower */}
      <path d={`M${j(200)} ${j(h * 0.82)} L${j(198)} ${j(h * 0.05)} L${j(310)} ${j(h * 0.04)} L${j(312)} ${j(h * 0.82)}`}
        stroke={color} strokeWidth={lw + 0.3} fill="none" />
      <path d={`M${j(198)} ${j(h * 0.05)} L${j(195)} ${j(h * 0.02)} L${j(253)} ${j(h * 0.005)} L${j(312)} ${j(h * 0.02)} L${j(310)} ${j(h * 0.04)}`}
        stroke={color} strokeWidth={lw} fill="none" />

      {/* Tower windows */}
      {Array.from({ length: 14 }, (_, row) => {
        const yt = h * 0.82 - (row + 1) * (h * 0.77 / 15);
        return Array.from({ length: 5 }, (__, col) => {
          const xt = 208 + col * 19;
          const ww = 13, wh = 9;
          return (
            <g key={`${row}-${col}`} opacity="0.55">
              <rect x={j(xt, 0.5)} y={j(yt, 0.5)} width={ww} height={wh} stroke={color} strokeWidth="0.5" fill="none" />
              {(row + col) % 4 === 1 &&
                <rect x={j(xt + 1, 0.3)} y={j(yt + 1, 0.3)} width={ww - 2} height={wh - 2} fill={gold} opacity="0.25" />}
            </g>
          );
        });
      })}

      {/* Tower shading */}
      <clipPath id="tower-clip-r">
        <rect x="270" y={h * 0.04} width="42" height={h * 0.78} />
      </clipPath>
      <g clipPath="url(#tower-clip-r)">
        <Hatch x={270} y={h * 0.04} w={42} h={h * 0.78} angle={45} spacing={4} color={color} opacity={0.12} />
      </g>
      <rect x={j(200)} y={j(h * 0.05)} width={70} height={h * 0.77} fill={gold} opacity="0.04" />

      {/* Left block */}
      <path d={`M${j(120)} ${j(h * 0.82)} L${j(118)} ${j(h * 0.55)} L${j(200)} ${j(h * 0.55)} L${j(200)} ${j(h * 0.82)}`}
        stroke={color} strokeWidth={lw} fill="none" />
      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 3 }, (__, c) => {
          const xt = 128 + c * 21, yt = h * 0.82 - (r + 1) * 52;
          if (yt < h * 0.57) return null;
          return <rect key={`l${r}${c}`} x={j(xt, 0.4)} y={j(yt, 0.4)} width="14" height="10" stroke={color} strokeWidth="0.5" fill="none" opacity="0.45" />;
        })
      )}

      {/* Right podium */}
      <path d={`M${j(312)} ${j(h * 0.82)} L${j(312)} ${j(h * 0.60)} L${j(390)} ${j(h * 0.60)} L${j(392)} ${j(h * 0.82)}`}
        stroke={color} strokeWidth={lw} fill="none" />
      {Array.from({ length: 2 }, (_, r) =>
        Array.from({ length: 3 }, (__, c) => {
          const xt = 320 + c * 22, yt = h * 0.82 - (r + 1) * 52;
          if (yt < h * 0.62) return null;
          return <rect key={`r${r}${c}`} x={j(xt, 0.4)} y={j(yt, 0.4)} width="15" height="11" stroke={color} strokeWidth="0.5" fill="none" opacity="0.45" />;
        })
      )}

      {/* Entrance */}
      <path d={`M${j(220)} ${j(h * 0.82)} L${j(218)} ${j(h * 0.73)} L${j(294)} ${j(h * 0.73)} L${j(292)} ${j(h * 0.82)}`}
        stroke={color} strokeWidth={lw * 0.8} fill="none" opacity="0.8" />
      <path d={`M${j(218)} ${j(h * 0.73)} L${j(214)} ${j(h * 0.71)} L${j(298)} ${j(h * 0.71)} L${j(294)} ${j(h * 0.73)}`}
        stroke={color} strokeWidth={lw * 0.8} fill="none" opacity="0.7" />
      <rect x={j(247, 0.3)} y={j(h * 0.76, 0.3)} width="18" height={h * 0.06} stroke={color} strokeWidth="0.6" fill="none" opacity="0.7" />

      {/* Trees */}
      {[85, 105].map((tx) => (
        <g key={tx} opacity="0.6">
          <line x1={j(tx)} y1={j(h * 0.82)} x2={j(tx)} y2={j(h * 0.64)} stroke={color} strokeWidth="0.8" />
          <ellipse cx={j(tx, 1.5)} cy={j(h * 0.60)} rx={j(11)} ry={j(16)} stroke={color} strokeWidth="0.7" fill={gold} fillOpacity="0.07" />
          <ellipse cx={j(tx - 4)} cy={j(h * 0.63)} rx={j(7)} ry={j(11)} stroke={color} strokeWidth="0.5" fill="none" opacity="0.5" />
        </g>
      ))}
      {[410, 432].map((tx) => (
        <g key={tx} opacity="0.5">
          <line x1={j(tx)} y1={j(h * 0.82)} x2={j(tx)} y2={j(h * 0.66)} stroke={color} strokeWidth="0.8" />
          <ellipse cx={j(tx, 1.5)} cy={j(h * 0.62)} rx={j(10)} ry={j(14)} stroke={color} strokeWidth="0.7" fill={gold} fillOpacity="0.06" />
        </g>
      ))}

      {/* Foreground */}
      <path d={`M${j(40)} ${j(h * 0.84)} Q${j(100)} ${j(h * 0.80)} ${j(150)} ${j(h * 0.83)} Q${j(200)} ${j(h * 0.85)} ${j(250)} ${j(h * 0.82)}`}
        stroke={color} strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Sun rays */}
      {Array.from({ length: 7 }, (_, i) => (
        <line key={i}
          x1={j(width * 0.45 + (i - 3) * 30)} y1={0}
          x2={j(width * 0.45 + (i - 3) * 30 + 12)} y2={h * 0.55}
          stroke={gold} strokeWidth="0.5" opacity="0.1" />
      ))}
    </svg>
  );
}
