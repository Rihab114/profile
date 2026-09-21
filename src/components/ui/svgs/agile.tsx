import type { SVGProps } from "react";

const Agile = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Circular arrow - top arc */}
    <path
      d="M16.5 5.5A8 8 0 0112 4a8 8 0 00-7.7 5.8"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Circular arrow - right arc */}
    <path
      d="M19.7 9.8A8 8 0 0120 12a8 8 0 01-5.8 7.7"
      stroke="#059669"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Circular arrow - bottom arc */}
    <path
      d="M7.5 18.5A8 8 0 0112 20a8 8 0 007.7-5.8"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Circular arrow - left arc */}
    <path
      d="M4.3 14.2A8 8 0 014 12a8 8 0 015.8-7.7"
      stroke="#059669"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Arrow heads */}
    <path d="M5 8l-.7 2.5L6.8 10" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 16l.7-2.5-2.5.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Center sprint dot */}
    <circle cx="12" cy="12" r="2" stroke="#10B981" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="0.75" fill="#10B981" />
  </svg>
);

export { Agile };
