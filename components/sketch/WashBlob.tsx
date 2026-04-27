interface WashBlobProps {
  x: number;
  y: number;
  rx: number;
  ry: number;
  color: string;
  opacity?: number;
  id: string;
}

export default function WashBlob({ x, y, rx, ry, color, opacity = 0.12, id }: WashBlobProps) {
  return (
    <g>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={color} stopOpacity={opacity} />
          <stop offset="60%"  stopColor={color} stopOpacity={opacity * 0.5} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id})`} />
    </g>
  );
}
