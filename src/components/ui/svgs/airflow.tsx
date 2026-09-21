import type { SVGProps } from "react";

const Airflow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Pinwheel blades */}
    <path
      d="M12 2C12 2 12 7 12 12C7 12 2 12 2 12C2 6.477 6.477 2 12 2Z"
      fill="#017CEE"
    />
    <path
      d="M22 12C22 12 17 12 12 12C12 7 12 2 12 2C17.523 2 22 6.477 22 12Z"
      fill="#00AD46"
    />
    <path
      d="M12 22C12 22 12 17 12 12C17 12 22 12 22 12C22 17.523 17.523 22 12 22Z"
      fill="#E43921"
    />
    <path
      d="M2 12C2 12 7 12 12 12C12 17 12 22 12 22C6.477 22 2 17.523 2 12Z"
      fill="#04D659"
    />
    <circle cx="12" cy="12" r="2" fill="white" />
  </svg>
);

export { Airflow };
