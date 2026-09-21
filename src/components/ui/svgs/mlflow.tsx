import type { SVGProps } from "react";

const MLflow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <path
      d="M4 12C4 7.582 7.582 4 12 4"
      stroke="#0194E2"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 4c4.418 0 8 3.582 8 8"
      stroke="#0194E2"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12c0 4.418-3.582 8-8 8"
      stroke="#43B8F2"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 20c-4.418 0-8-3.582-8-8"
      stroke="#43B8F2"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M8 12h8M12 8v8"
      stroke="#0194E2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { MLflow };
