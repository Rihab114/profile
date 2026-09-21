import type { SVGProps } from "react";

const ScikitLearn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Orange nodes */}
    <circle cx="4" cy="12" r="2.5" fill="#F7931E" />
    <circle cx="20" cy="6" r="2" fill="#F7931E" />
    <circle cx="20" cy="18" r="2" fill="#F7931E" />
    {/* Blue nodes */}
    <circle cx="12" cy="8" r="2" fill="#3499CD" />
    <circle cx="12" cy="16" r="2" fill="#3499CD" />
    {/* Connecting lines */}
    <path d="M6.5 12L10 8.5" stroke="#F7931E" strokeWidth="1.2" />
    <path d="M6.5 12L10 15.5" stroke="#F7931E" strokeWidth="1.2" />
    <path d="M14 8L18 6.5" stroke="#3499CD" strokeWidth="1.2" />
    <path d="M14 16L18 17.5" stroke="#3499CD" strokeWidth="1.2" />
    <path d="M14 8.5L18 17" stroke="#3499CD" strokeWidth="0.8" opacity="0.5" />
    <path d="M14 15.5L18 7" stroke="#F7931E" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

export { ScikitLearn };
