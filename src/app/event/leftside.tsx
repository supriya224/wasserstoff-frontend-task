import React from "react";
import MainLayout from "../layouts/MainLayout";
import Marquee from "react-fast-marquee";
import Slider from "./slider";
import { LuAlarmClock } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
// import Slider from "./slider";

const Leftside: React.FC = () => {
  return (
    <MainLayout>
      <section>
        <div className="w-full h-screen   ">
          <div className="mb-7 gap-9 p-9">
            <h3 className="text-3xl font-bold text-left">
              Explore Your First Event
            </h3>
            <h3 className="text-6xl font-bold py-4">Event Name</h3>
            <div className="flex gap-7 ">
              <p className="flex items-center "> <span><SlLocationPin /></span>Venue</p>
              <p className="flex items-center"><span><LuAlarmClock /></span> 4/03/2024</p>
              <p>@19:00</p>
            </div>
            <p className="text-left text-sm font-bold w-72 py-4">
              Lorem ipsum dolor sit ame48t consectetur adipisicing elit.
              Repellat deleniti autem iste quae dolorem, saepe porro minima
              ipsum mollitia exercitationem.
            </p>
            <h3 className="text-lg font-bold ">Artist Lineup</h3>
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
