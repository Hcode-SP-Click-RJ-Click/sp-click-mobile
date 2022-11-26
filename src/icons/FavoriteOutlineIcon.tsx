import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./IconProps";

function FavoriteOutlineIcon(props: IconProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        d="M10.887 19.66h-.001c-2.585-2.345-4.69-4.254-6.155-6.045C3.27 11.83 2.5 10.225 2.5 8.5c0-2.804 2.196-5 5-5 1.589 0 3.121.742 4.12 1.914l.38.447.38-.447C13.38 4.242 14.912 3.5 16.5 3.5c2.804 0 5 2.196 5 5 0 1.726-.772 3.33-2.23 5.116-1.463 1.79-3.564 3.698-6.143 6.042l-.012.011-.001.001L12 20.675l-1.114-1.015z"
        stroke={props.color ?? "#111"}
      />
    </Svg>
  );
}

export default FavoriteOutlineIcon;