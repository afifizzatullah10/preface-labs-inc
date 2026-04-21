type BrandIconProps = {
  size: number;
};

export function BrandIcon({ size }: BrandIconProps) {
  const stroke = Math.max(10, Math.round(size * 0.1));
  const padding = Math.round(size * 0.18);
  const radius = Math.round(size * 0.22);
  const innerX = padding;
  const innerY = padding;
  const innerSize = size - padding * 2;
  const pStemX = innerX + innerSize * 0.18;
  const pTopY = innerY + innerSize * 0.12;
  const pBottomY = innerY + innerSize * 0.9;
  const pBowlWidth = innerSize * 0.46;
  const pBowlHeight = innerSize * 0.4;
  const lStemX = innerX + innerSize * 0.78;
  const lTopY = innerY + innerSize * 0.12;
  const lBottomY = innerY + innerSize * 0.88;
  const lFootX = innerX + innerSize * 0.52;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="50%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#3f3f46" />
        </linearGradient>
        <linearGradient id="pl-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f5f5" />
        </linearGradient>
        <linearGradient id="pl-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={size} height={size} rx={radius} fill="url(#pl-bg)" />

      <path
        d={`
          M ${pStemX} ${pTopY}
          L ${pStemX} ${pBottomY}
          M ${pStemX} ${pTopY}
          L ${pStemX + pBowlWidth} ${pTopY}
          Q ${pStemX + pBowlWidth + innerSize * 0.12} ${pTopY}, ${
          pStemX + pBowlWidth + innerSize * 0.12
        } ${pTopY + pBowlHeight * 0.5}
          Q ${pStemX + pBowlWidth + innerSize * 0.12} ${pTopY + pBowlHeight}, ${
          pStemX + pBowlWidth
        } ${pTopY + pBowlHeight}
          L ${pStemX} ${pTopY + pBowlHeight}
          M ${lStemX} ${lTopY}
          L ${lStemX} ${lBottomY}
          L ${lFootX} ${lBottomY}
        `}
        stroke="url(#pl-mark)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={innerX + innerSize * 0.82}
        cy={innerY + innerSize * 0.2}
        r={Math.max(5, Math.round(size * 0.03))}
        fill="url(#pl-accent)"
      />
    </svg>
  );
}
