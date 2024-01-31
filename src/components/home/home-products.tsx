import React from "react";
import ProductCard from "@/shared/products/product-card";
import SectionHeading from "@/shared/section-heading/section-heading";
import Button from "../ui/button";

const HomeProducts = () => {
  return (
    <section className="mt-[70px] max-w-screen-xl mx-auto ">
      <SectionHeading
        typeText="Our Products"
        headingText="Explore Our Products"
      />
      <div className="grid grid-cols-4 grid-rows-2 place-items-start gap-x-[30px] gap-y-[60px] mt-[60px]">
        <ProductCard isProductHasVariant={true} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard isProductHasVariant={true} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full flex justify-center items-center mt-[60px]">
        <Button
          buttonText={"View All Products"}
          width={"234px"}
          textWeight="500"
        />
      </div>
    </section>
  );
};

export default HomeProducts;
