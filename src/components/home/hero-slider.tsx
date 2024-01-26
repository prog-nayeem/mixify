"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppleLogo from "@/public/svgs/apple_logo.svg";
import RightArrowIcon from "@/public/svgs/right-arrow-icon.svg";
import heroBannerImage from "@/public/images/hero-banner-image1.png";
import Image from "next/image";
import SliderDots from "./slider-dots";
interface CustomDotsProps {
  dots: React.ReactNode;
}
const CustomDots: React.FC<CustomDotsProps> = ({ dots }) => {
  console.log(dots);
  return (
    <div className="grid place-items-center ">
      <ul className="flex ">{dots}</ul>
    </div>
  );
};

// const CustomPaging: React.FC<{ i: number }> = ({ i }) => (
//   <div
//     style={{
//       width: "30px",
//       color: "blue",
//       border: "1px blue solid",
//     }}
//   >
//     {i + 1}
//   </div>
// );

const HeroSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dotsClass: `slick-dots !bottom-0`,
    appendDots: (dots) => <ul className="">{dots}</ul>,
    customPaging: (i) => (
      <div className="rounded-full bg-primary bg-opacity-50 !w-3 !h-3 " />
    ),
  };

  return (
    <div className="pl-9 pt-9 flex-1 overflow-hidden">
      <Slider {...settings}>
        <div className="bg-bg2 h-[344px] !flex rounded-sm pl-16">
          <div className="pt-[58px] w-[421px]">
            <div className="flex items-center space-x-5">
              <AppleLogo className="w-[40px] h-[49px]" />
              <span className="text-[16px] font-normal text-text ">
                iPhone 14 Series
              </span>
            </div>
            <h2 className="text-[48px] pt-4 w-[294px] text-text font-semibold ">
              Up to 10% off Voucher
            </h2>
            <button className="mt-3">
              <div className="flex items-center space-x-2 text-text">
                <p className="text-[16px] font-medium border-b-[1px]">
                  Shop Now
                </p>
                <RightArrowIcon className="w-[20px] h-[20px] pt-[2.8px]" />
              </div>
            </button>
          </div>
          <Image
            src={heroBannerImage}
            alt="hero-banner-image"
            className="flex-1 pt-4 w-full"
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
