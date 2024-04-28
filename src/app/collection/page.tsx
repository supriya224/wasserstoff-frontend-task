"use client";
import { NextPage } from "next";
import Leftside from "./leftside";
import Slider from "./slider";
import ImageSlider from "./ImageSlider";

const CollectibleData: NextPage = () => {
  return (
    <section className="bg-zinc-900">
      <div  className="container mx-auto flex justify-between text-white">
      <ImageSlider images={[]} />
      <div>
      <Leftside />
      <Slider images={[]} />
      </div>
      </div>
    </section>
  );
};

export default CollectibleData;
