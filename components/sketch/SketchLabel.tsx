import { GOLD, NAVY, PARCH } from "@/lib/constants";

interface SketchLabelProps {
  text: string;
  gold?: string;
  color?: string;
}

export default function SketchLabel({ text, gold = GOLD, color = NAVY }: SketchLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-14 w-full">
      <svg width="80" height="16" viewBox="0 0 80 16">
        <path d="M0,8 C20,5 40,11 60,8 L80,8" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
        <circle cx="80" cy="8" r="2.5" fill={gold} opacity="0.6" />
      </svg>
      <span
        className="whitespace-nowrap text-xs tracking-widest"
        style={{ fontFamily: "Cormorant SC, serif", color: gold, letterSpacing: "0.3em" }}
      >
        {text}
      </span>
      <svg width="80" height="16" viewBox="0 0 80 16" style={{ transform: "scaleX(-1)" }}>
        <path d="M0,8 C20,5 40,11 60,8 L80,8" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
        <circle cx="80" cy="8" r="2.5" fill={gold} opacity="0.6" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${gold}44, transparent)` }} />
    </div>
  );
}
