import React from "react";

interface LineProps {
  className?: string;
}
const Line: React.FC<LineProps> = ({ className }) => {
  return <hr className={` border-[0.5px] bg-bg2 ${className || ""}`} />;
};

export default Line;
