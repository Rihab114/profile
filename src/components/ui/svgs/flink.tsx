import type { SVGProps } from "react";

const Flink = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Stylized squirrel / Flink logo - simplified as flowing shape */}
    <path
      d="M18 4C16 4 14.5 5 13.5 6.5C12.5 5.5 11 5 9 5C6 5 4 7 4 10C4 13 6 15 8 16.5L6 20H9L10.5 17.5C11 17.8 11.5 18 12 18C14 18 16 16.5 17 14.5C18.5 11.5 20 9 20 7C20 5 19.5 4 18 4Z"
      fill="#E6526F"
    />
    <circle cx="15" cy="7.5" r="1" fill="white" />
    <path
      d="M8 10C8 10 9.5 11 11 11C12.5 11 14 10 14 10"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export { Flink };
