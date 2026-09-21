import type { SVGProps } from "react";

const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    {/* Left parallelogram */}
    <path d="M4 5.5l4.5 2.6v5.2L4 10.7V5.5z" fill="#5C4EE5" />
    {/* Top right parallelogram */}
    <path d="M9.25 8.5l4.5 2.6v5.2l-4.5-2.6V8.5z" fill="#4040B2" />
    {/* Bottom right parallelogram */}
    <path d="M9.25 2l4.5 2.6v5.2l-4.5-2.6V2z" fill="#5C4EE5" />
    {/* Far right parallelogram */}
    <path d="M14.5 11.5l4.5 2.6v5.2l-4.5-2.6V11.5z" fill="#5C4EE5" />
  </svg>
);

export { Terraform };
