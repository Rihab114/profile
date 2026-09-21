import type { SVGProps } from "react";

const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <path
      d="M6.5 18.5h11a4.5 4.5 0 001.34-8.79A6 6 0 006.5 11a4 4 0 000 7.5z"
      stroke="#64748B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Cloud };
