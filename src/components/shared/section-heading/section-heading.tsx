import React from "react";
import LeftArrowIcon from "@/public/svgs/left-arrow-icon.svg";
import RightArrowIcon from "@/public/svgs/right-arrow-icon.svg";

export enum ButtonType {
  ArrowButton,
  NormalButton,
}

interface SectionHeadingProps {
  typeText: string;
  headingText: string;
  isTimerVisable?: boolean;
  buttonType: ButtonType;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  typeText,
  headingText,
  isTimerVisable,
  buttonType,
}) => {
  return (
    <div className="max-w-screen-xl w-full mx-auto flex justify-between items-end">
      <div>
        <div className="space-x-4 flex items-center">
          <div className="w-5 h-10 rounded-[4px] bg-secondary2" />
          <p className="text-secondary2 text-[16px] font-semibold ">
            {typeText}
          </p>
        </div>

        <div className=" flex items-end space-x-[87px]">
          <h2 className="text-3xl font-semibold text-text2 leading-[1.4] tracking-wide">
            {headingText}
          </h2>
          <div className="flex items-center space-x-[17px]">
            <div>
              <label className="text-[12px] tracking-[0.07px] font-medium ">
                Days
              </label>
              <p className="text-[32px] tracking-widest font-bold text-text2 ">
                03
              </p>
            </div>
            <p className="text-hoverButton1 text-[30px] leading-[0] mt-[10px]">
              :
            </p>
            <div>
              <label className="text-[12px] tracking-[0.07px] font-medium ">
                Hours
              </label>
              <p className="text-[32px] tracking-widest font-bold text-text2 ">
                03
              </p>
            </div>
            <p className="text-hoverButton1 text-[30px] leading-[0] mt-[10px]">
              :
            </p>
            <div>
              <label className="text-[12px] tracking-[0.07px] font-medium ">
                Minutes
              </label>
              <p className="text-[32px] tracking-widest font-bold text-text2 ">
                03
              </p>
            </div>
            <p className="text-hoverButton1 text-[30px] leading-[0] mt-[10px]">
              :
            </p>

            <div>
              <label className="text-[12px] tracking-[0.07px] font-medium ">
                Seconds
              </label>
              <p className="text-[32px] tracking-widest font-bold text-text2 ">
                03
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <button className="bg-secondary w-[46px] h-[46px] rounded-full grid place-items-center">
          <LeftArrowIcon className="w-[16px]" />
        </button>
        <button className="bg-secondary w-[46px] h-[46px] rounded-full grid place-items-center">
          <RightArrowIcon
            className="w-[16px] h-[14px] stroke-bg2"
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionHeading;
