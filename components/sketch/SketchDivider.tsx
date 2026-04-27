import { NAVY, GOLD } from "@/lib/constants";
import Birds from "./Birds";

interface SketchDividerProps {
  color?: string;
  gold?: string;
  showBirds?: boolean;
}

export default function SketchDivider({ color = NAVY, gold = GOLD, showBirds = true }: SketchDividerProps) {
  return (
    <div className="flex flex-col items-center w-full my-2">
      <svg width="100%" height="28" viewBox="0 0 800 28" preserveAspectRatio="none">
        <path
          d="M0,14 C60,10 120,18 180,14 C240,10 300,18 360,14 C420,10 480,18 540,14 C600,10 660,18 720,14 C760,11 790,14 800,14"
          stroke={color} strokeWidth="0.8" fill="none" opacity="0.4"
        />
        <path
          d="M0,17 C80,14 160,20 240,17 C320,14 400,20 480,17 C560,14 640,20 720,17 L800,17"
          stroke={color} strokeWidth="0.4" fill="none" opacity="0.2"
        />
        <ellipse cx="400" cy="14" rx="60" ry="6" fill={gold} opacity="0.12" />
        {showBirds && <Birds color={color} count={5} x0={310} y0={4} spread={180} />}
      </svg>
    </div>
  );
}
