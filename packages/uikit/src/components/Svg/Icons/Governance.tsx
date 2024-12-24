import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 25 24" {...props}>
    <g clipPath="url(#clip0_1056_26996)">
      <path d="M4.4873 11.5V15.5C4.4873 16.33 5.1573 17 5.9873 17C6.8173 17 7.4873 16.33 7.4873 15.5V11.5C7.4873 10.67 6.8173 10 5.9873 10C5.1573 10 4.4873 10.67 4.4873 11.5ZM10.4873 11.5V15.5C10.4873 16.33 11.1573 17 11.9873 17C12.8173 17 13.4873 16.33 13.4873 15.5V11.5C13.4873 10.67 12.8173 10 11.9873 10C11.1573 10 10.4873 10.67 10.4873 11.5ZM3.9873 22H19.9873C20.8173 22 21.4873 21.33 21.4873 20.5C21.4873 19.67 20.8173 19 19.9873 19H3.9873C3.1573 19 2.4873 19.67 2.4873 20.5C2.4873 21.33 3.1573 22 3.9873 22ZM16.4873 11.5V15.5C16.4873 16.33 17.1573 17 17.9873 17C18.8173 17 19.4873 16.33 19.4873 15.5V11.5C19.4873 10.67 18.8173 10 17.9873 10C17.1573 10 16.4873 10.67 16.4873 11.5ZM11.0573 1.49001L3.1573 5.65001C2.7473 5.86001 2.4873 6.29001 2.4873 6.75001C2.4873 7.44001 3.0473 8.00001 3.7373 8.00001H20.2473C20.9273 8.00001 21.4873 7.44001 21.4873 6.75001C21.4873 6.29001 21.2273 5.86001 20.8173 5.65001L12.9173 1.49001C12.3373 1.18001 11.6373 1.18001 11.0573 1.49001Z" />
    </g>
    <defs>
      <clipPath id="clip0_1056_26996">
        <rect width="24" height="24" transform="translate(0.487305)" />
      </clipPath>
    </defs>
  </Svg>
);

export default Icon;