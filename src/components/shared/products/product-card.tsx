import React from "react";
import RatingStarIcon from "./RatingStarIcon";
import Image from "next/image";
import productImage from "@/public/images/g92-2-500x500 1.png";
import EyeIcon from "@/public/svgs/eye-icon.svg";
import FavouriteIcon from "@/public/svgs/favourite-icon.svg";
import FillIcon from "@/components/ui/fill-icon";

const ProductCard: React.FC = () => {
  return (
    <div className="w-[270px] h-[350px]">
      <div className="h-[250px] relative w-full bg-secondary grid place-items-center rounded-md">
        <Image
          className="w-[190px] h-[180px] object-contain"
          src={productImage}
          alt="HAVIT HV-G92 Gamepad"
        />
        <div className="w-[55px] absolute top-3 left-3 h-[26px] bg-secondary2 grid place-items-center text-text rounded-md ">
          <p className="text-[12px] font-normal tracking-wide">-40%</p>
        </div>
        <div className="absolute top-3 right-3 space-y-2">
          <FillIcon Icon={<FavouriteIcon className="w-[16px] h-[14px]" />} />
          <FillIcon Icon={<EyeIcon className="w-[19px] h-[14px]" />} />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-text2 text-[16px] font-medium truncate tracking-wide">
          HAVIT HV-G92 Gamepad
        </h2>
        <div className="flex mt-2 items-center space-x-3 text-[16px] font-medium tracking-wider">
          <h3 className="text-secondary2  ">$120</h3>
          <h3 className="line-through text-text2 text-opacity-50">$160</h3>
        </div>
        <div className="flex mt-2 space-x-[10px] items-center">
          <div className="flex space-x-1 items-center">
            <RatingStarIcon percentage={100} />
            <RatingStarIcon percentage={100} />
            <RatingStarIcon percentage={100} />
            <RatingStarIcon percentage={100} />
            <RatingStarIcon percentage={50} />
          </div>

          <p className="text-[14px] tracking-wide pt-[1px] font-semibold text-text2 text-opacity-50">
            (65)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
