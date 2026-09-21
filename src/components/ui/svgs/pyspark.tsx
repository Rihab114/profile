import type { SVGProps } from "react";

const PySpark = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Spark diamond shape */}
    <path
      d="M12 3l4 9-4 9-4-9 4-9z"
      fill="#E25A1C"
      opacity="0.9"
    />
    {/* Inner diamond highlight */}
    <path
      d="M12 6l2.5 6-2.5 6-2.5-6 2.5-6z"
      fill="#FF7F50"
      opacity="0.6"
    />
    {/* Python snake - left curve */}
    <path
      d="M6 8c0-2 1.5-3 3-3h1.5c1 0 1.5.5 1.5 1.2v2.3c0 .8-.5 1.2-1.5 1.2H8.5c-1 0-1.5.8-1.5 1.5v1"
      stroke="#3776AB"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Python snake - right curve */}
    <path
      d="M18 16c0 2-1.5 3-3 3h-1.5c-1 0-1.5-.5-1.5-1.2v-2.3c0-.8.5-1.2 1.5-1.2h2c1 0 1.5-.8 1.5-1.5v-1"
      stroke="#FFD43B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Python dots */}
    <circle cx="8" cy="6.5" r="0.6" fill="#3776AB" />
    <circle cx="16" cy="17.5" r="0.6" fill="#FFD43B" />
  </svg>
);

export { PySpark };
