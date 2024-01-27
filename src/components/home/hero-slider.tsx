"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppleLogo from "@/public/svgs/apple_logo.svg";
import RightArrowIcon from "@/public/svgs/right-arrow-icon.svg";
import heroBannerImage from "@/public/images/hero-banner-image1.png";
import Image from "next/image";

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
    // Custom tailwind selector for editing the child class of slider
    dotsClass: `slick-dots !flex !justify-center !items-center !bottom-[11px] [&>*]:!w-[12px] [&>*]:bg-primary [&>*]:bg-opacity-50 [&>*]:rounded-full [&>*]:!h-[12px] [&>*]:!mx-[6px] [&_.slick-active]:!bg-secondary2 [&_.slick-active]:!w-[14px] [&_.slick-active]:!h-[14px] [&_.slick-active]:border-2 [&_.slick-active]:border-primary`,
    appendDots: (dots) => <ul className="">{dots}</ul>,
    customPaging: (i) => <div className="h-full" />,
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
                <RightArrowIcon
                  className="w-[20px] h-[20px] pt-[2.8px]"
                  strokeWidth={1.5}
                />
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
