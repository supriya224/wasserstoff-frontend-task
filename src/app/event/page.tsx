"use client";
import { NextPage } from "next";
// import Leftside from "./leftside";
import ImageSlider from "./ImageSlider";
import Button from "../components/Button/Button";
import Leftside from "./leftside";

const EventData: NextPage = () => {
  return (
    <section className="bg-zinc-900">
      <div>
        <h3 className="text-6xl text-yellow-400 font-extrabold">Astrix.</h3>
        <h3 className="text-9xl font-extrabold text-zinc-800 w-1/2 pt-32 fixed">
          Astirx collection Event
        </h3>
      </div>
      <div className="container mx-auto w-auto flex justify-between text-white">
        <ImageSlider images={[]} />
        <Leftside />
      </div>
      <Button/>
    </section>
  );
};

export default EventData;
