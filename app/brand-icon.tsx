type BrandIconProps = {
  size?: number;
  className?: string;
};

export function BrandIcon({ size = 512, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="23.2" fill="#0C0D10" />
      <g transform="translate(-2 0)">
        <path
          d="M20 18H50A20 20 0 0 1 50 58H34V82H20Z M34 30H50A8 8 0 0 1 50 46H34Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        <rect x="60" y="72" width="24" height="10" fill="#FF4D6D" />
      </g>
    </svg>
  );
}

export function BrandMark({
  size = 32,
  className,
  fill = "currentColor",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="14 12 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 18H50A20 20 0 0 1 50 58H34V82H20Z M34 30H50A8 8 0 0 1 50 46H34Z"
        fill={fill}
        fillRule="evenodd"
      />
      <rect x="60" y="72" width="24" height="10" fill="#FF4D6D" />
    </svg>
  );
}

