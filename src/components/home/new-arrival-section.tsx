import React from "react";
import SectionHeading, {
  ButtonType,
} from "@/shared/section-heading/section-heading";
import playStation from "@/public/images/banner-play-staticon.png";
import womenCollectionImage from "@/public/images/banner-women-collection-image.png";
import speakerImage from "@/public/images/banner-speaker-image.png";
import perfumeImage from "@/public/images/banner-perfume-image.png";
import FeaturedBanner from "./common/featured-banner";

const NewArivalSection = () => {
  return (
    <section className="mt-[140px] max-w-screen-xl mx-auto">
      <SectionHeading
        typeText="Featured"
        headingText="New Arrival"
        buttonType={ButtonType.None}
      />
      <div className="mt-[60px] h-[600px] grid grid-cols-2 gap-x-[30px]">
        <FeaturedBanner
          imageUrl={playStation}
          title="PlayStation 5"
          subtitle="Black and White version of the PS5 coming out on sale."
          buttonText="Shop Now"
          height="600px"
          imgHeight={511}
          imgWidth={511}
        />
        <div className="grid h-[600px] grid-rows-2 place-items-start place-content-start gap-y-8">
          <FeaturedBanner
            imageUrl={womenCollectionImage}
            title="Women’s Collections"
            subtitle="Featured woman collections that give you another vibe."
            buttonText="Shop Now"
            height="284px"
            imgWidth={432}
            imgHeight={286}
          />
          <div className="grid grid-cols-2 gap-x-8 ">
            <FeaturedBanner
              imageUrl={speakerImage}
              title="Speakers"
              subtitle="Amazon wireless speakers"
              buttonText="Shop Now"
              height="284px"
              imgWidth={190}
              imgHeight={222}
            />
            <FeaturedBanner
              imageUrl={perfumeImage}
              title="Perfume"
              subtitle="GUCCI INTENSE OUD EDP"
              buttonText="Shop Now"
              height="284px"
              imgWidth={201}
              imgHeight={203}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArivalSection;
