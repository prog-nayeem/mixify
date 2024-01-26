import CategoryList from "@/components/home/category-list";
import HeroSlider from "@/components/home/hero-slider";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section className="max-w-screen-xl w-full mx-auto flex">
      <CategoryList />
      <HeroSlider />
    </section>
  );
}
