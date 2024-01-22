import React from "react";
import Image from "next/image";

interface IconProps {
  url: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ url, width = 16, height = 16 }) => {
  return <Image src={url} alt="icon" width={width} height={height} />;
};

export default Icon;
