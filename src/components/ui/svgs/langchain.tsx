import type { SVGProps } from "react";

const LangChain = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Simplified parrot/chain - green theme */}
    {/* Chain link top */}
    <path
      d="M10 4a3 3 0 013 3v2a3 3 0 01-3 3H9a3 3 0 01-3-3V7a3 3 0 013-3h1z"
      stroke="#1A7F64"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Chain link bottom */}
    <path
      d="M14 12a3 3 0 013 3v2a3 3 0 01-3 3h-1a3 3 0 01-3-3v-2a3 3 0 013-3h1z"
      stroke="#1A7F64"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Connecting line */}
    <path
      d="M11 12v0a2 2 0 012-2v0"
      stroke="#1A7F64"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Parrot eye dot */}
    <circle cx="10" cy="7" r="1" fill="#1A7F64" />
    {/* Parrot beak */}
    <path
      d="M12.5 6.5l2-1-1 2z"
      fill="#2BA87A"
    />
  </svg>
);

export { LangChain };
