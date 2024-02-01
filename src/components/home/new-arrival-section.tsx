import React from "react";
import SectionHeading, {
  ButtonType,
} from "@/shared/section-heading/section-heading";
import playStation from "@/public/images/banner-play-staticon.png";
import womenCollectionImage from "@/public/images/banner-women-collection-image.png";
import speakerImage from "@/public/images/banner-speaker-image.png";
import perfumeImage from "@/public/images/banner-perfume-image.png";
import Image from "next/image";

const NewArivalSection = () => {
  return (
    <section className="mt-[140px] max-w-screen-xl mx-auto">
      <SectionHeading
        typeText="Featured"
        headingText="New Arrival"
        buttonType={ButtonType.None}
      />
      <div className="mt-[60px] h-[600px] grid grid-cols-2 gap-x-[30px]">
        <div className="bg-bg2 relative w-full rounded-[4px] h-[600px] flex items-end justify-center overflow-hidden">
          <Image
            src={playStation}
            alt="PlayStation 5"
            className="w-[511px] h-[511px]"
          />

          <div className="absolute bottom-8 left-8">
            <h2 className="text-2xl truncate font-semibold leading-[24px] text-text tracking-wider inline-block">
              PlayStation 5
            </h2>
            <p className="text-[14px] font-normal leading-[21px] tracking-wide w-[242px] text-text mt-[16px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-[16px] leading-[24px] tracking-wider font-medium cursor-pointer mt-4 text-primary border-b-[1px] border-primary ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid h-[600px] grid-rows-2 place-items-start place-content-start gap-y-8">
          <div className="bg-bg2 relative  rounded-[4px] h-[284px] w-[570px] flex items-end justify-end overflow-hidden">
            <Image
              src={womenCollectionImage}
              alt="Women’s Collections"
              className="w-[432px] h-[284px] object-contain"
            />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-2xl truncate font-semibold leading-[24px] text-text tracking-wider inline-block">
                Women’s Collections
              </h2>
              <p className="text-[14px] font-normal leading-[21px] tracking-wide w-[242px] text-text mt-[16px]">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-[16px] leading-[24px] tracking-wider font-medium cursor-pointer mt-4 text-primary border-b-[1px] border-primary ">
                Shop Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 ">
            <div className="bg-bg2 relative rounded-[4px] w-[270px] h-[284px] flex items-center justify-center overflow-hidden">
              <div className="w-[190px] h-[221px] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 bg-[#D9D9D9] rounded-full blur-[100px]" />
              <Image
                src={speakerImage}
                alt="Speakers"
                className="w-[201px] h-[203px] z-10"
              />

              <div className="absolute w-[191px] bottom-8 left-8 z-20">
                <h2 className="text-2xl truncate font-semibold leading-[24px] text-text tracking-wider inline-block">
                  Speakers
                </h2>
                <p className="text-[14px] font-normal leading-[21px] tracking-wide text-text mt-2">
                  Amazon wireless speakers
                </p>
                <button className="text-[16px] leading-[24px] tracking-wider font-medium cursor-pointer mt-2 text-primary border-b-[1px] border-primary ">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="bg-bg2 relative rounded-[4px] w-[270px] h-[284px] flex items-center justify-center overflow-hidden">
              <div className="w-[238px] h-[238px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 bg-[#D9D9D9] rounded-full blur-[120px]" />
              <Image
                src={perfumeImage}
                alt="Perfume"
                className="w-[201px] h-[203px] z-10"
              />

              <div className="absolute w-[191px] bottom-8 left-8 z-20">
                <h2 className="text-2xl truncate font-semibold leading-[24px] text-text tracking-wider inline-block">
                  Perfume
                </h2>
                <p className="text-[14px] font-normal leading-[21px] tracking-wide text-text mt-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="text-[16px] leading-[24px] tracking-wider font-medium cursor-pointer mt-2 text-primary border-b-[1px] border-primary ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArivalSection;
