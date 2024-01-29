import React from "react";
import RatingStarIcon from "./RatingStarIcon";
import Image from "next/image";
import productImage from "@/public/images/g92-2-500x500 1.png";
import EyeIcon from "@/public/svgs/eye-icon.svg";
import FavouriteIcon from "@/public/svgs/favourite-icon.svg";
import FillIcon from "@/components/ui/fill-icon";
import Button from "@/components/ui/button";

const ProductCard: React.FC = () => {
  return (
    <div className="w-[270px] group h-[350px] cursor-pointer">
      <div className="h-[250px] w-[270px] relative overflow-hidden bg-secondary grid place-items-center rounded-[4px]">
        <Image
          className="w-[190px] h-[180px] object-contain"
          src={productImage}
          alt="HAVIT HV-G92 Gamepad"
        />
        <div className="absolute top-3 left-3">
          <Button
            buttonText="-40%"
            width="55px"
            height="26px"
            textSize="12px"
            applyHoverEffect={false}
          />
        </div>

        <div className="absolute top-3 right-3 space-y-2">
          <FillIcon Icon={<FavouriteIcon className="w-[16px] h-[14px]" />} />
          <FillIcon Icon={<EyeIcon className="w-[19px] h-[14px]" />} />
        </div>
        <div className="absolute -bottom-20 group-hover:bottom-0 transition-all duration-300 ease-in right-0 left-0">
          <Button
            buttonText="Add To Cart"
            width="100%"
            height="41px"
            bgColor="#000000"
            textWeight="500"
            borderRadius="0px 0px 4px 4px"
            applyHoverEffect={false}
          />
        </div>
      </div>
      <div className="mt-4 w-[270px]">
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
