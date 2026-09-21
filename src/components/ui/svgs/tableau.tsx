import type { SVGProps } from "react";

const Tableau = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Center cross - dark gray */}
    <path d="M11.5 8h1v3.5H16v1h-3.5V16h-1v-3.5H8v-1h3.5V8z" fill="#4E4E4E" />
    {/* Top cross - orange */}
    <path d="M11.75 2h.5v2h2v.5h-2v2h-.5v-2h-2V4h2V2z" fill="#E8762D" />
    {/* Bottom cross - orange */}
    <path d="M11.75 17.5h.5v2h2v.5h-2v2h-.5v-2h-2v-.5h2v-2z" fill="#E8762D" />
    {/* Left cross - teal */}
    <path d="M4.25 9.5h.5v2h2v.5h-2v2h-.5v-2h-2v-.5h2v-2z" fill="#5B879B" />
    {/* Right cross - teal */}
    <path d="M19.25 9.5h.5v2h2v.5h-2v2h-.5v-2h-2v-.5h2v-2z" fill="#5B879B" />
    {/* Top-left cross - green */}
    <path d="M7.5 4.5h.5v1.5h1.5v.5H8v1.5h-.5V6.5H6v-.5h1.5V4.5z" fill="#7199A6" />
    {/* Top-right cross - purple */}
    <path d="M15.5 4.5h.5v1.5H17.5v.5H16v1.5h-.5V6.5H14v-.5h1.5V4.5z" fill="#A0224E" />
    {/* Bottom-left cross - green */}
    <path d="M7.5 15.5h.5v1.5h1.5v.5H8v1.5h-.5v-1.5H6v-.5h1.5v-1.5z" fill="#7199A6" />
    {/* Bottom-right cross - purple */}
    <path d="M15.5 15.5h.5v1.5H17.5v.5H16v1.5h-.5v-1.5H14v-.5h1.5v-1.5z" fill="#A0224E" />
  </svg>
);

export { Tableau };
