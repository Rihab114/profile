import type { SVGProps } from "react";

const Spark = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2L6 8L2 12L6 16L12 22L18 16L22 12L18 8L12 2Z"
      fill="#E25A1C"
    />
    <path
      d="M12 6L8 10L6 12L8 14L12 18L16 14L18 12L16 10L12 6Z"
      fill="#FFFFFF"
      opacity="0.3"
    />
    <path
      d="M12 2L18 8L22 12L18 16L12 22"
      stroke="#E25A1C"
      strokeWidth="0"
      fill="#C8400D"
      opacity="0.3"
    />
  </svg>
);

export { Spark };
