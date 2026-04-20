type BrandIconProps = {
  size: number;
};

export function BrandIcon({ size }: BrandIconProps) {
  const stroke = Math.max(12, Math.round(size * 0.12));
  const padding = Math.round(size * 0.18);
  const radius = Math.round(size * 0.22);
  const innerX = padding;
  const innerY = padding;
  const innerSize = size - padding * 2;
  const pBowlWidth = innerSize * 0.52;
  const pBowlHeight = innerSize * 0.45;
  const pStemHeight = innerSize * 0.82;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="pl-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={size} height={size} rx={radius} fill="url(#pl-bg)" />

      <path
        d={`
          M ${innerX + innerSize * 0.28} ${innerY + innerSize * 0.09}
          L ${innerX + innerSize * 0.28} ${innerY + pStemHeight}
          M ${innerX + innerSize * 0.28} ${innerY + innerSize * 0.12}
          L ${innerX + innerSize * 0.28 + pBowlWidth} ${innerY + innerSize * 0.12}
          Q ${innerX + innerSize * 0.28 + pBowlWidth + innerSize * 0.12} ${innerY + innerSize * 0.12}, ${
          innerX + innerSize * 0.28 + pBowlWidth + innerSize * 0.12
        } ${innerY + innerSize * 0.12 + pBowlHeight * 0.5}
          Q ${innerX + innerSize * 0.28 + pBowlWidth + innerSize * 0.12} ${innerY + innerSize * 0.12 + pBowlHeight}, ${
          innerX + innerSize * 0.28 + pBowlWidth
        } ${innerY + innerSize * 0.12 + pBowlHeight}
          L ${innerX + innerSize * 0.28} ${innerY + innerSize * 0.12 + pBowlHeight}
        `}
        stroke="url(#pl-mark)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
