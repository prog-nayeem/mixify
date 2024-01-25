import React from "react";
// import SearchIcon from "/public/svgs/search-icon.svg";
// import FavouriteIcon from "@/public/svgs/favourite-icon.svg";
// import CartIcon from "/public/svgs/cart-icon.svg";
// import cart from "@/public/svgs/cart-icon.svg?url";
import FavouriteIcon from "/public/svgs/favourite-icon.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="max-w-screen-xl mt-10 flex mx-auto justify-between items-center w-full h-[38px]">
      <h2 className="text-[24px] font-bold">Mixify</h2>
      <nav>
        <ul className=" space-x-[48px] flex text-[16px] font-normal">
          <li className="border-b border-text2 cursor-pointer">Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <div className="flex justify-between space-x-[24px] items-center">
        <div className="w-[243px]  h-[38px] bg-secondary flex rounded-[4px] justify-between pl-5 pr-2.5 items-center">
          <input
            placeholder="What are you looking for?"
            className="placeholder:text-text2 placeholder:opacity-50 text-[12px] bg-transparent outline-none w-full "
          />
          {/* <SearchIcon className="fill-transparent text-red-500" /> */}
        </div>
        <FavouriteIcon stroke="red" fill="blue" height="100px" />
        {/* <FavouriteIcon className="w-5 h-[18px]" /> */}
        {/* <CartIcon className="w-8 h-8" /> */}
        {/* <SvgIcon path="/icons/favourite-icon.svg" width={20} height={18} /> */}
        {/* <SvgIcon path="/icons/cart-icon.svg" width={32} height={32} /> */}
        {/* <Image
          src={cart}
          alt={""}
          fill={true}
          className="w-[100px] fill-red-600 stroke-orange-600"
        /> */}
      </div>
    </header>
  );
}

export default Header;
