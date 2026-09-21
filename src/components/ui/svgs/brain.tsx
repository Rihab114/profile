import type { SVGProps } from "react";

const Brain = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Left brain hemisphere */}
    <path
      d="M12 4C9.5 4 7.5 5.5 7 7.5c-1.5.5-2.5 2-2.5 3.5 0 1.5.8 2.8 2 3.5-.2.8 0 1.8.8 2.5.8.8 2 1.2 3.2 1h1.5"
      stroke="#8B5CF6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Right brain hemisphere */}
    <path
      d="M12 4c2.5 0 4.5 1.5 5 3.5 1.5.5 2.5 2 2.5 3.5 0 1.5-.8 2.8-2 3.5.2.8 0 1.8-.8 2.5-.8.8-2 1.2-3.2 1H12"
      stroke="#8B5CF6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Center line */}
    <path d="M12 4v14" stroke="#8B5CF6" strokeWidth="1" strokeLinecap="round" />
    {/* Neural connections - left */}
    <path d="M9 8c1 1 1 2.5 0 3.5" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 12c1 .5 1.5 1.5 1 2.5" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" />
    {/* Neural connections - right */}
    <path d="M15 8c-1 1-1 2.5 0 3.5" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" />
    <path d="M16 12c-1 .5-1.5 1.5-1 2.5" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" />
    {/* Neural nodes */}
    <circle cx="9" cy="8" r="0.75" fill="#8B5CF6" />
    <circle cx="15" cy="8" r="0.75" fill="#8B5CF6" />
    <circle cx="8" cy="12" r="0.75" fill="#8B5CF6" />
    <circle cx="16" cy="12" r="0.75" fill="#8B5CF6" />
    {/* Stem */}
    <path d="M12 18v2" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export { Brain };
