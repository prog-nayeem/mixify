import React from "react";
import Icon from "./ui/icon";

function Header() {
  return (
    <header className="max-w-screen-xl mt-10 flex mx-auto justify-between items-center w-full h-[38px]">
      <h2 className="text-[24px] font-bold">Mixify</h2>
      <nav>
        <ul className=" space-x-[48px] flex text-[16px] font-normal">
          <li className="border-b border-text2">Home</li>
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
          <Icon url="/icons/search-icon.svg" />
        </div>
        <Icon url="/icons/favourite-icon.svg" width={20} height={18} />
        <Icon url="/icons/cart-icon.svg" width={32} height={32} />
      </div>
    </header>
  );
}

export default Header;
