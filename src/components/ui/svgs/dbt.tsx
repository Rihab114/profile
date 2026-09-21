import type { SVGProps } from "react";

const Dbt = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z"
      fill="#FF694A"
    />
    <path
      d="M12 2L20.5 7V17L12 22V2Z"
      fill="#E6523C"
      opacity="0.8"
    />
    <text
      x="12"
      y="14"
      textAnchor="middle"
      fontFamily="sans-serif"
      fontSize="5.5"
      fontWeight="bold"
      fill="white"
    >
      dbt
    </text>
  </svg>
);

export { Dbt };
