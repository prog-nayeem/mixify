import React from "react";

function TopNewsHeader() {
  return (
    <div className="h-[48px] w-full bg-bg2 ">
      <div className="max-w-screen-xl w-full text-[14px] mx-auto h-full text-text flex items-center justify-between">
        <div className="space-x-4 flex flex-1 items-center justify-center">
          <p className="font-light">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="font-semibold underline">ShopNow</button>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span>English</span>
            <img src="/icons/DropDown.svg" />
          </div>
          {/* <ul>
                <li>Bangla</li>
              </ul> */}
        </div>
      </div>
    </div>
  );
}

export default TopNewsHeader;
