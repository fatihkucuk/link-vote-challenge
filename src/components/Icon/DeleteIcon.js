import React from "react";

const DeleteIcon = ({ width, height, fill, rotateDeg = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20pt"
      height="20pt"
      viewBox="0 0 20 20"
      version="1.1"
    >
      <defs>
        <linearGradient
          id="linear0"
          gradientUnits="userSpaceOnUse"
          x1="64"
          y1="18.6667"
          x2="64"
          y2="124.8554"
          gradientTransform="matrix(0.15625,0,0,0.15625,0,0)"
        >
          <stop
            offset="0"
            style={{ stopColor: "rgb(100%,32.156863%,32.156863%)" }}
          />
          <stop
            offset="0.324"
            style={{ stopColor: "rgb(95.294118%,23.137255%,23.137255%)" }}
          />
          <stop offset="1" style={{ stopColor: "rgb(83.529412%,0%,0%)" }} />
        </linearGradient>
        <filter
          id="alpha"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
        </filter>
        <mask id="mask0">
          <g filter="url(#alpha)">
            <rect
              x="0"
              y="0"
              width="20"
              height="20"
              style={{
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "0.2",
                stroke: "none",
              }}
            />
          </g>
        </mask>
        <clipPath id="clip1">
          <rect x="0" y="0" width="20" height="20" />
        </clipPath>
        <g id="surface5" clipPath="url(#clip1)">
          <path
            style={{
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(25.882353%,25.882353%,25.882353%)",
              fillOpacity: "1",
            }}
            d="M 10 1.09375 C 14.910156 1.09375 18.90625 5.089844 18.90625 10 C 18.90625 14.910156 14.910156 18.90625 10 18.90625 C 5.089844 18.90625 1.09375 14.910156 1.09375 10 C 1.09375 5.089844 5.089844 1.09375 10 1.09375 M 10 0.625 C 4.820312 0.625 0.625 4.820312 0.625 10 C 0.625 15.179688 4.820312 19.375 10 19.375 C 15.179688 19.375 19.375 15.179688 19.375 10 C 19.375 4.820312 15.179688 0.625 10 0.625 Z M 10 0.625 "
          />
        </g>
        <mask id="mask1">
          <g filter="url(#alpha)">
            <rect
              x="0"
              y="0"
              width="20"
              height="20"
              style={{
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "0.2",
                stroke: "none",
              }}
            />
          </g>
        </mask>
        <clipPath id="clip2">
          <rect x="0" y="0" width="20" height="20" />
        </clipPath>
        <g id="surface8" clipPath="url(#clip2)">
          <path
            style={{
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(25.882353%,25.882353%,25.882353%)",
              fillOpacity: "1",
            }}
            d="M 16.25 8.75 C 16.59375 8.75 16.875 9.03125 16.875 9.375 L 16.875 10.625 C 16.875 10.96875 16.59375 11.25 16.25 11.25 L 3.75 11.25 C 3.40625 11.25 3.125 10.96875 3.125 10.625 L 3.125 9.375 C 3.125 9.03125 3.40625 8.75 3.75 8.75 L 16.25 8.75 M 16.25 8.28125 L 3.75 8.28125 C 3.148438 8.28125 2.65625 8.773438 2.65625 9.375 L 2.65625 10.625 C 2.65625 11.226562 3.148438 11.71875 3.75 11.71875 L 16.25 11.71875 C 16.851562 11.71875 17.34375 11.226562 17.34375 10.625 L 17.34375 9.375 C 17.34375 8.773438 16.851562 8.28125 16.25 8.28125 Z M 16.25 8.28125 "
          />
        </g>
      </defs>
      <g id="surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "url(#linear0)",
          }}
          d="M 19.375 10 C 19.375 15.175781 15.175781 19.375 10 19.375 C 4.824219 19.375 0.625 15.175781 0.625 10 C 0.625 4.824219 4.824219 0.625 10 0.625 C 15.175781 0.625 19.375 4.824219 19.375 10 Z M 19.375 10 "
        />
        <use href="#surface5" mask="url(#mask0)" />
        <use href="#surface8" mask="url(#mask1)" />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(98.039216%,98.039216%,98.039216%)",
            fillOpacity: "1",
          }}
          d="M 16.25 11.25 L 3.75 11.25 C 3.40625 11.25 3.125 10.96875 3.125 10.625 L 3.125 9.375 C 3.125 9.03125 3.40625 8.75 3.75 8.75 L 16.25 8.75 C 16.59375 8.75 16.875 9.03125 16.875 9.375 L 16.875 10.625 C 16.875 10.96875 16.59375 11.25 16.25 11.25 Z M 16.25 11.25 "
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;
