import React, { ReactNode } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";

interface SliderDotsProps {
  dots: ReactNode;
  //   currentSlide: number;
  //   slideCount: number;
  //   slickGoTo: (slideNumber: number, dontAnimate?: boolean) => void;
}

const SliderDots: React.FC<SliderDotsProps> = ({
  dots,
  //   currentSlide,
  //   slideCount,
  //   slickGoTo,
}) => (
  <ul
    style={{
      display: "flex",
      justifyContent: "center",
      listStyle: "none",
      padding: 0,
    }}
  >
    {[...Array(slideCount)].map((_, index) => (
      <li key={index} style={{ marginRight: "5px", cursor: "pointer" }}>
        <button
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: index === currentSlide ? "#007BFF" : "#ccc",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => slickGoTo(index)}
        />
      </li>
    ))}
  </ul>
);

export default SliderDots;
