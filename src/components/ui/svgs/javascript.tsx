import type { SVGProps } from "react";

const JavaScript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="2" fill="#F7DF1E" />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontFamily="sans-serif"
      fontSize="8"
      fontWeight="bold"
      fill="#323330"
    >
      JS
    </text>
  </svg>
);

export { JavaScript };
