import { NAVY } from "@/lib/constants";
import Birds from "./Birds";

interface BirdRowProps {
  color?: string;
  count?: number;
}

export default function BirdRow({ color = NAVY, count = 6 }: BirdRowProps) {
  return (
    <svg width={count * 28} height={20} viewBox={`0 0 ${count * 28} 20`} style={{ overflow: "visible" }}>
      <Birds color={color} count={count} x0={14} y0={10} spread={(count - 1) * 28} />
    </svg>
  );
}
