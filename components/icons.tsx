import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CalculatorIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 12h2m4 0h2m-8 4h2m4 0h2" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <rect x="8" y="8" width="11" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M7 8V4h10v4M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M20.5 11.8A8.5 8.5 0 0 1 7.9 19.2L3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.1 7.7c.3-.6.6-.6.9-.6h.4c.2 0 .4.1.5.5l.8 2c.1.3 0 .5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.6 2 2.8 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.2.5.3.5.5 0 .2-.1 1.2-.7 1.7-.5.5-1.2.8-2 .8-.5 0-1.2-.1-2.2-.5-1.3-.5-2.7-1.3-4.1-2.8-1.2-1.3-2.1-2.9-2.3-4-.2-.9.1-1.5.3-1.9Z" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M18.2 9A7 7 0 0 0 6.4 6.4L4 9m16 6-2.4 2.6A7 7 0 0 1 5.8 15" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="m8 10 4 4 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
