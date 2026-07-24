type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <span
      className={`logo ${className}`}
      aria-label="Kalkulator Selamatan"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        role="img"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="4"
          width="34"
          height="33"
          rx="8"
          fill="#fffdf8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3 13h34M12 2v5M28 2v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="19" r="1.6" fill="#b78c3d" />
        <circle cx="15" cy="19" r="1.6" fill="#b78c3d" />
        <circle cx="20" cy="19" r="1.6" fill="#b78c3d" />
        <circle cx="25" cy="19" r="1.6" fill="#b78c3d" />
        <circle cx="30" cy="19" r="1.6" fill="#b78c3d" />
        <path
          d="m13 28 4 4 9-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!compact && <span>Kalkulator Selamatan</span>}
    </span>
  );
}
