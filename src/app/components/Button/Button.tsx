import MainLayout from "@/app/layouts/MainLayout";
import Link from "next/link";
import React, { useState } from "react";

const Button = () => {
  const [activeButton, setActiveButton] = useState("events");

  return (
    <MainLayout>
      <div className="container mx-auto w-auto flex justify-between px-7 py-12">
        <div className="bg-gray-600 w-fit rounded-full flex gap-7 px-1">
          <button
            type="button"
            className={ 
              activeButton === "events"
                ? "text-white bg-zinc-500 font-bold rounded-full py-3 px-3"
                : "text-gray-300"
            }
            onClick={() => setActiveButton("events")}
          >
            <Link href="/event">Events</Link>
          </button>
          <button
            type="button"
            className={
              activeButton === "collections"
                ? "text-white bg-zinc-500 font-bold rounded-full py-3 px-3"
                : "text-gray-300"
            }
            onClick={() => setActiveButton("collections")}
          >
            <Link href="/collection">Collections</Link>
          </button>
        </div>
        <button className="bg-yellow-300 rounded-full px-3 font-bold text-xl" type="button">
          Join Waitlist
        </button>
      </div>
    </MainLayout>
  );
};

export default Button;

