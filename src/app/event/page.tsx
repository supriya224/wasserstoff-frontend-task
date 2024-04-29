"use client";
import { NextPage } from "next";
// import Leftside from "./leftside";
import ImageSlider from "./ImageSlider";
import Button from "../components/Button/Button";
import Leftside from "./leftside";

const EventData: NextPage = () => {
  return (
    <section className="bg-zinc-900 py-5  ">
      <div>
        <h3 className="text-6xl text-yellow-400 font-extrabold px-9">Astrix.</h3>
        <h3 className="text-9xl w-1/2 font-extrabold text-zinc-800 pt-32 px-9 fixed -z-90">
          {/* Astirx collection Event */}
        </h3>
        {/* sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-300 xl:bg-orange-600 */}
      </div>
      <div className=" w-auto grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-32 text-white">
        <div className="w-[70vw] overflow-x-hidden flex lg:justify-center">
        <ImageSlider images={[]} />
        </div>
        <div className="w-fit xl:ml-48 sm:overflow-x-hidden md:overflow-x-hidden z-100 ">
        <Leftside />
        </div>
      </div>
      <Button/>
    </section>
  );
};

export default EventData;
