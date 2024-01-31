import React from "react";
import LeftArrowIcon from "@/public/svgs/left-arrow-icon.svg";
import RightArrowIcon from "@/public/svgs/right-arrow-icon.svg";
import FillIcon from "@/components/ui/fill-icon";
import Button from "@/components/ui/button";

export enum ButtonType {
  ArrowButton,
  NormalButton,
  None,
}

interface SectionHeadingProps {
  typeText: string;
  headingText: string;
  isTimerVisable?: boolean;
  buttonType?: ButtonType;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  typeText,
  headingText,
  isTimerVisable = false,
  buttonType = ButtonType.ArrowButton,
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

        <div
          style={{ marginTop: isTimerVisable ? "none" : "20px" }}
          className=" flex items-end space-x-[87px]"
        >
          <h2 className="text-3xl font-semibold text-text2 leading-[1.6] tracking-wide">
            {headingText}
          </h2>
          {isTimerVisable && (
            <div className="flex items-center space-x-[17px]">
              <div>
                <label className="text-[12px] tracking-[0.07px] font-medium ">
                  Days
                </label>
                <p className="text-[32px] leading-[1.4] tracking-widest font-bold text-text2 ">
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
                <p className="text-[32px] leading-[1.4]  tracking-widest font-bold text-text2 ">
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
                <p className="text-[32px] leading-[1.4]  tracking-widest font-bold text-text2 ">
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
                <p className="text-[32px] leading-[1.4]  tracking-widest font-bold text-text2 ">
                  03
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {buttonType === ButtonType.ArrowButton ? (
        <div className="flex items-start space-x-2">
          <FillIcon
            Icon={<LeftArrowIcon className="w-[16px] h-[14px]" />}
            bgColor="#F5F5F5"
            width="46px"
            height="46px"
          />
          <FillIcon
            Icon={
              <RightArrowIcon
                className="w-[16px] h-[14px] stroke-bg2"
                strokeWidth={2}
              />
            }
            bgColor="#F5F5F5"
            width="46px"
            height="46px"
          />
        </div>
      ) : buttonType == ButtonType.NormalButton ? (
        <Button width="159px" buttonText="View All" textWeight="500" />
      ) : null}
    </div>
  );
};

export default SectionHeading;
