import  { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg width={180} fill="none" viewBox="0 0 80 78" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M77.979 11.492L42.077 75.016c-.742 1.312-2.646 1.32-3.398.014L2.065 11.498c-.82-1.422.41-3.145 2.038-2.856l35.94 6.356c.23.04.465.04.694-.001L75.926 8.65c1.623-.293 2.858 1.416 2.053 2.841z"
        fill="url(#a)"
      />
      <path
        d="M57.164.304L30.595 5.455a.969.969 0 00-.786.89l-1.634 27.313a.973.973 0 001.193.998l7.397-1.69c.692-.157 1.317.446 1.175 1.134L35.742 44.75c-.148.716.533 1.33 1.24 1.117l4.569-1.374c.708-.213 1.389.402 1.239 1.12l-3.493 16.725c-.218 1.046 1.188 1.617 1.775.72l.391-.6 21.65-42.75c.362-.716-.263-1.532-1.057-1.38l-7.614 1.454c-.716.136-1.325-.523-1.123-1.216L58.29 1.52C58.491.825 57.88.165 57.164.304z"
        fill="url(#b)"
      />
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="1.171"
          x2="45.243"
          y1="6.371"
          y2="66.861"
        >
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="37.981"
          x2="45.898"
          y1="1.703"
          y2="56.591"
        >
          <stop stopColor="#FFEA83" />
          <stop offset=".083" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}
