import type { SVGProps } from "react";

const Jira = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="jira-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient id="jira-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2684FF" />
        <stop offset="100%" stopColor="#0052CC" />
      </linearGradient>
    </defs>
    {/* Main S-shape top part */}
    <path
      d="M20.27 11.28L12.72 3.73 12 3l-8.27 8.28a.66.66 0 000 .94L9 17.5l3-3 3-3-3-3 5.27 5.28a.66.66 0 00.94 0l2.06-2.06a.66.66 0 000-.94z"
      fill="url(#jira-grad-1)"
    />
    {/* S-shape bottom part */}
    <path
      d="M12 9.5a4.24 4.24 0 01-.01 6l-3.72 3.72L12 23l8.27-8.28-5.27-5.22a4.24 4.24 0 01-3 0z"
      fill="url(#jira-grad-2)"
    />
  </svg>
);

export { Jira };
