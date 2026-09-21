import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4479A1" />
    <path
      d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6"
      stroke="#4479A1"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"
      stroke="#4479A1"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4479A1" opacity="0.3" />
  </svg>
);

export { Sql };
