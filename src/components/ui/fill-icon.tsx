import React, { ReactElement } from "react";

interface FillIconProps {
  Icon: ReactElement;
  width?: string;
  height?: string;
  bgColor?: string;
  padding?: string;
}
const FillIcon: React.FC<FillIconProps> = ({
  Icon,
  width = "34px",
  height = "34px",
  bgColor = "#FFFFFF",
  padding = "5px",
}) => {
  return (
    <button
      className={`cursor-pointer flex justify-center items-center rounded-full`}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        padding: padding,
      }}
    >
      {Icon}
    </button>
  );
};

export default FillIcon;
