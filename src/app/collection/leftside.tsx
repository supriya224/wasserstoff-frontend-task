import React from "react";
import MainLayout from "../layouts/MainLayout";
import Marquee from "react-fast-marquee";
import Slider from "./slider";

const Leftside: React.FC = () => {
  return (
    <MainLayout>  
      <section>
        <div className="w-full h-screen bg-red-900">
          <div className="mb-7 gap-9 p-9">
            <h3 className="text-3xl font-bold text-left">
              Explore your first Collectible
            </h3>
            <h3 className="text-6xl font-bold py-4">Meta Lives</h3>
            <h3 className="text-2xl font-bold py-4">Live in Astrix</h3>
            <p className="text-left text-sm font-bold w-72 py-4">
              Lorem ipsum dolor sit ame48t consectetur adipisicing elit.
              Repellat deleniti autem iste quae dolorem, saepe porro minima
              ipsum mollitia exercitationem.
            </p>
            <h3 className="text-lg my-2 font-bold ">22k people intrested</h3>
          </div>

          <div className="">
            <Slider images={[]} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Leftside;
