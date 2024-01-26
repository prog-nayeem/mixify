import React from "react";
import categories, { Category } from "./data/categories";
import DropDownRightArrow from "@/public/svgs/drop-down-right-arrow.svg";

const CategoryList = () => {
  const renderCategories = (category: Category) => (
    <ul
      className="group pr-[18px] cursor-pointer hover:text-button2 transition duration-300 text-text2"
      key={category.name}
    >
      <div className="flex justify-between items-center">
        <li className="group-hover:inline-block text-[16px] font-normal ">
          {category.name}
        </li>
        {category.subcategories && (
          <ul className="hidden">
            {category.subcategories.map((subCategory) => (
              <li key={subCategory}>{subCategory}</li>
            ))}
          </ul>
        )}

        {category.subcategories && (
          <DropDownRightArrow className="w-[8px] h-[13px] group-hover:stroke-button2 transition duration-300" />
        )}
      </div>
    </ul>
  );

  return (
    <div className="w-[233px] pt-9 space-y-4 border-r-[0.7px]">
      {categories.map((category) => renderCategories(category))}
    </div>
  );
};

export default CategoryList;
