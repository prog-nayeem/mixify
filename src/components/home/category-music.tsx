import React from "react";
import FillIcon from "../ui/fill-icon";
import Timers from "./data/timer";
import Button from "../ui/button";
import musicBanner from "@/public/images/category-music-banner-image.png";
import Image from "next/image";

const CategoryMusic = () => {
  return (
    <div className="bg-bg2 h-[500px] pl-14 relative flex justify-between">
      <div className="w-[504px] h-[500px] left-[552px] top-0 absolute opacity-50 bg-[#D9D9D9] rounded-full blur-[200px]" />

      <div className="pt-[69px]">
        <p className="text-[16px] font-semibold text-button1 ">Categories</p>
        <h2 className="mt-[32px] text-5xl font-semibold w-[443px] text-text leading-[60px] tracking-[1.92px]">
          Enhance Your Music Experience
        </h2>
        <div className="flex items-center mt-8 mb-10 space-x-[24px]">
          {Timers.map((entry, index) => (
            <FillIcon
              key={index}
              Icon={
                <div>
                  <h3 className="text-[16px] font-semibold text-text2 leading-[1]">
                    {entry.time.toString()}
                  </h3>
                  <p className="text-[11px] text-text2 font-normal">
                    {entry.timeType}
                  </p>
                </div>
              }
              width="62px"
              height="62px"
            />
          ))}
        </div>
        <Button
          buttonText="Buy Now!"
          width="171px"
          bgColor="#00FF66"
          textWeight="500"
        />
      </div>
      <div className="pr-[60px] grid place-items-center">
        <Image
          className="w-[568px] h-[330px] z-50 bg-transparent"
          src={musicBanner}
          alt="Music Banner Image"
        />
      </div>
    </div>
  );
};

export default CategoryMusic;
