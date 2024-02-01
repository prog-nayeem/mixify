import CategoryList from "@/components/home/category-list";
import CategoryMusic from "@/components/home/category-music";
import {
  SubCategory,
  subCategories,
} from "@/components/home/data/sub-categories";
import HeroSlider from "@/components/home/hero-slider";
import HomeProducts from "@/components/home/home-products";
import NewArivalSection from "@/components/home/new-arrival-section";
import Services from "@/components/home/services";
import SubCategoryCard from "@/components/home/sub-category-card";
import ProductCard from "@/components/shared/products/product-card";
import SectionHeading, {
  ButtonType,
} from "@/components/shared/section-heading/section-heading";
import Button from "@/components/ui/button";
import Line from "@/components/ui/line";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="max-w-screen-xl w-full mx-auto flex">
        <CategoryList />
        <HeroSlider />
      </section>
      <section className="mt-[140px]">
        <SectionHeading
          headingText="Flash Sales"
          typeText="Today’s"
          isTimerVisable={true}
        />
        <div className="max-w-screen-xl mt-[60px] mx-auto w-full">
          <div className="flex space-x-[30px]">
            <ProductCard />
            <ProductCard />
            <ProductCard isProductHasVariant={true} />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="mx-auto w-screen mt-[60px] grid place-content-center">
          <Button
            buttonText={"View All Products"}
            width={"234px"}
            textWeight="500"
          />
        </div>
        <Line className="max-w-screen-xl mx-auto mt-[70px]" />
      </section>
      <section className="mt-[70px] max-w-screen-xl mx-auto">
        <SectionHeading
          typeText="Categories"
          headingText="Browse By Category"
        />
        <div className="mt-[60px] flex items-center space-x-[30px]">
          {subCategories.map((subCategory: SubCategory) => (
            <SubCategoryCard key={subCategory.text} subCategory={subCategory} />
          ))}
        </div>
        <Line className="mt-[70px]" />
      </section>
      <section className="mt-[70px] max-w-screen-xl mx-auto">
        <SectionHeading
          typeText="This Month"
          headingText="Best Selling Products"
          buttonType={ButtonType.NormalButton}
        />
        <div className="mt-[60px] flex space-x-[30px]">
          <ProductCard />
          <ProductCard />
          <ProductCard isProductHasVariant={true} />
          <ProductCard />
        </div>
      </section>
      <section className="mt-[140px] max-w-screen-xl mx-auto ">
        <CategoryMusic />
      </section>
      <HomeProducts />
      <NewArivalSection />
      <Services />
    </div>
  );
}
