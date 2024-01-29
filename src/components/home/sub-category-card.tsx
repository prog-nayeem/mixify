import React, { ReactElement } from "react";
import { SubCategory } from "./data/sub-categories";

const SubCategoryCard = ({ subCategory }: { subCategory: SubCategory }) => {
  const { Icon, text } = subCategory;
  return (
    <div className="w-[170px] group hover:bg-secondary2 hover:text-text hover:border-none transition-all duration-300 ease-in-out cursor-pointer h-[145px] flex flex-col items-center justify-center rounded-[4px] border border-[#0000004d]">
      <Icon className="w-14 h-14 group-hover:stroke-primary" />
      <h3 className="text-[16px] tracking-wider mt-4 font-normal text-center truncate">
        {text}
      </h3>
    </div>
  );
};

export default SubCategoryCard;
