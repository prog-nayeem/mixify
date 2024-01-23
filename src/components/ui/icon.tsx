import React from "react";
import Image from "next/image";

interface IconProps {
  url: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  url,
  width = 16,
  height = 16,
  className,
}) => {
  return (
    <Image
      src={url}
      width={width}
      height={height}
      className={className}
      alt="icon"
      // beforeInjection={(svg) => {
      //   svg.setAttribute("style", `fill: blue`);
      // }}
    />
  );
};

export default Icon;
