import React from "react";
import SearchIcon from "@/public/svgs/search-icon.svg";
import CartIcon from "@/public/svgs/cart-icon.svg";
import FavouriteIcon from "@/public/svgs/favourite-icon.svg";

function Header() {
  return (
    <header className="max-w-screen-xl mt-10 flex mx-auto justify-between items-center w-full h-[38px]">
      <h2 className="text-[24px] font-bold tracking-[1.4px] leading-normal">
        Mixify
      </h2>
      <nav>
        <ul className=" space-x-[48px] flex text-[16px] font-normal">
          <li className="border-b border-text2 cursor-pointer">Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <div className="flex justify-between space-x-[24px] items-center">
        <div className="w-[243px] space-x-4 h-[38px] bg-secondary flex rounded-[4px] justify-between pl-5 pr-2.5 items-center">
          <input
            placeholder="What are you looking for?"
            className="placeholder:text-text2 placeholder:opacity-50 text-[12px] bg-transparent outline-none w-full "
          />
          <div className="w-[16px] h-[16px]">
            <SearchIcon className="fill-transparent" />
          </div>
        </div>
        <FavouriteIcon className="w-[20px] h-[17px] " />
        <CartIcon className="w-[28px] h-[28px]" />
      </div>
    </header>
  );
}

export default Header;
