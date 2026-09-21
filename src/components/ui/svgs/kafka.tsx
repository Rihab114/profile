import type { SVGProps } from "react";

const Kafka = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Central node */}
    <circle cx="12" cy="12" r="2.5" fill="#231F20" />
    {/* Top right node */}
    <circle cx="17" cy="6" r="2" fill="#231F20" />
    {/* Bottom right node */}
    <circle cx="17" cy="18" r="2" fill="#231F20" />
    {/* Left top node */}
    <circle cx="7" cy="8" r="2" fill="#231F20" />
    {/* Left bottom node */}
    <circle cx="7" cy="16" r="2" fill="#231F20" />
    {/* Connecting lines */}
    <path d="M14 10.5L15.5 7.5" stroke="#231F20" strokeWidth="1.5" />
    <path d="M14 13.5L15.5 16.5" stroke="#231F20" strokeWidth="1.5" />
    <path d="M10 10.5L8.5 9" stroke="#231F20" strokeWidth="1.5" />
    <path d="M10 13.5L8.5 15" stroke="#231F20" strokeWidth="1.5" />
  </svg>
);

export { Kafka };
