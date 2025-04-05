import * as React from "react";
const CoffeeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 7h1a4 4 0 1 1 0 8h-1m0-8H1v9a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7ZM4 1v2m4-2v2m4-2v2"
    />
  </svg>
);
export default CoffeeIcon;
