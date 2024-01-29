"use client";

import React, { ReactElement, useState } from "react";

interface ButtonProps {
  buttonText: string;
  textSize?: string;
  textColor?: string;
  textWeight?: string;
  width: string;
  height?: string;
  bgColor?: string;
  isBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  isIconPresent?: boolean;
  icon?: ReactElement;
  applyHoverEffect?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  textSize = "16px",
  textColor = "#FAFAFA",
  textWeight = "400",
  width,
  height = "56px",
  bgColor = "#DB4444",
  isBorder,
  borderColor = "rgba(0, 0, 0, 0.4)",
  borderRadius = "4px",
  isIconPresent,
  icon,
  applyHoverEffect = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex items-center transition-all duration-300 ease-in-out justify-center space-x-4"
        style={{
          backgroundColor: applyHoverEffect && isHovered ? "#E07575" : bgColor,
          width: width,
          height: height,
          border: isBorder ? `1px solid ${borderColor}` : "none",
          borderRadius: borderRadius,
        }}
      >
        {isIconPresent && icon}
        <p
          className="text-[16px] tracking-[0.04em]"
          style={{
            color: textColor,
            fontSize: textSize,
            fontWeight: textWeight,
          }}
        >
          {buttonText}
        </p>
      </div>
    </button>
  );
};

export default Button;
