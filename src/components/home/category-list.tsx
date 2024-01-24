import React from "react";
import categories, { Category } from "./data/categories";
// import SvgIcon from "../ui/svg-icon";

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
          <ul className=" hidden">
            {category.subcategories.map((subCategory) => (
              <li key={subCategory}>{subCategory}</li>
            ))}
          </ul>
        )}

        {/* {category.subcategories && (
          // <SvgIcon
          //   path="/icons/right-arrow-icon.svg"
          //   color="red"
          //   width={8}
          //   height={13}
          //   className="group-hover:text-button2"
          // />
          // <SvgIcon icon="back-arrow" size={32} color="blue" />

        )} */}
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
