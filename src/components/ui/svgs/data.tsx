import type { SVGProps } from "react";

const Data = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Left node */}
    <circle cx="4" cy="12" r="2" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Top right node */}
    <circle cx="20" cy="7" r="2" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Bottom right node */}
    <circle cx="20" cy="17" r="2" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Middle top node */}
    <circle cx="12" cy="7" r="2" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Middle bottom node */}
    <circle cx="12" cy="17" r="2" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Connecting lines - left to middle */}
    <path d="M6 11l4-3" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M6 13l4 3" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round" />
    {/* Connecting lines - middle to right */}
    <path d="M14 7h4" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 17h4" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round" />
    {/* Cross connections */}
    <path d="M13 9l5 6" stroke="#0EA5E9" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M13 15l5-6" stroke="#0EA5E9" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    {/* Node fills */}
    <circle cx="4" cy="12" r="1" fill="#0EA5E9" />
    <circle cx="12" cy="7" r="1" fill="#0EA5E9" />
    <circle cx="12" cy="17" r="1" fill="#0EA5E9" />
    <circle cx="20" cy="7" r="1" fill="#0EA5E9" />
    <circle cx="20" cy="17" r="1" fill="#0EA5E9" />
  </svg>
);

export { Data };
