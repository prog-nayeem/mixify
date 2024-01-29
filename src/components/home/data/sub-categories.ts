import React from "react";
import CellPhoneIcon from "@/public/svgs/category-cell-phone.svg";
import ComputerIcon from "@/public/svgs/category-computer.svg";
import SmartWatchIcon from "@/public/svgs/category-smart-watch.svg";
import CameraIcon from "@/public/svgs/category-camera.svg";
import HeadphoneIcon from "@/public/svgs/category-headphone.svg";
import GamepadIcon from "@/public/svgs/category-gamepad.svg";

export interface SubCategory {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text: string;
}

export const subCategories: SubCategory[] = [
  {
    Icon: CellPhoneIcon,
    text: "Phones",
  },
  {
    Icon: ComputerIcon,
    text: "Computers",
  },
  {
    Icon: SmartWatchIcon,
    text: "SmartWatch",
  },
  {
    Icon: CameraIcon,
    text: "Camera",
  },
  {
    Icon: HeadphoneIcon,
    text: "Headphones",
  },
  {
    Icon: GamepadIcon,
    text: "Gaming",
  },
];
