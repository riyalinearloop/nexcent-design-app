import React from "react";

export const EventIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6V8ZM36 20H38H36ZM10 20H12H10ZM14.686 10.686L13.272 9.272L14.686 10.686ZM33.314 10.686L34.728 9.272L33.314 10.686Z"
        fill="#4CAF4F"
      />
      <path
        d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14V14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6M36 20H38M10 20H12M14.686 10.686L13.272 9.272M33.314 10.686L34.728 9.272"
        stroke="#4CAF4F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
