import CategoryList from "@/components/home/category-list";
import HeroSlider from "@/components/home/hero-slider";
import SectionHeading, {
  ButtonType,
} from "@/components/shared/section-heading/section-heading";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="max-w-screen-xl w-full mx-auto flex">
        <CategoryList />
        <HeroSlider />
      </section>
      <section className="mt-[140px]">
        <SectionHeading
          buttonType={ButtonType.ArrowButton}
          headingText="Flash Sales"
          typeText="Today’s"
        />
      </section>
    </>
  );
}
