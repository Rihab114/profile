import type { SVGProps } from "react";

const Aws = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* AWS smile/arrow */}
    <path
      d="M8.4 15.2c-2.2-1.1-3.6-3.2-3.6-5.6C4.8 5.8 8 3 12 3s7.2 2.8 7.2 6.6c0 2.4-1.4 4.5-3.6 5.6"
      stroke="#232F3E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Orange smile arrow */}
    <path
      d="M4 14.5c2.5 2.2 5 3.2 8 3.2s5.5-1 8-3.2"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Arrow tip */}
    <path
      d="M17 13l3 1.5-1.5 3"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* AWS text */}
    <path
      d="M7.5 10.5l1-3 1 3M8 9.5h1.2M12.5 8l-.8 3h-.1l-.8-3M14.5 8.5c-.5-.3-1.2-.2-1.2.5s1.5.7 1.5 1.5c0 .8-.8 1-1.5.7"
      stroke="#232F3E"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Aws };
