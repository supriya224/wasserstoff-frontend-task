import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IMG from "../../assets/img.jpeg"

const Slider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div className="max-w-md px-9">
        <h4>collectible</h4>
        <div>
        <Swiper 
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="bg-purple-300 p-2 text-xs rounded-lg">
            <div className="flex justify-between pb-1">
            <h3 className="bg-black text-white rounded-lg px-1">2024</h3>
            <h3 className="">By  <span className="font-bold text-zinc-700">Pablo</span></h3>
            </div>
            <p className="text-center py-1">Collectible Name</p>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 border border-black rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-purple-300 p-2  text-xs rounded-lg">
            <div className="flex justify-between ">
            <h3 className="bg-black text-white rounded-lg px-1">2024</h3>
            <h3 className="">By  <span className="font-bold text-zinc-700">Pablo</span></h3>
            </div>
            <p className="text-center py-1">Collectible Name</p>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 border border-black rounded-lg"
            />
          </SwiperSlide> 
           <SwiperSlide className="bg-purple-300 p-2  text-xs rounded-lg">
            <div className="flex justify-between">
            <h3 className="bg-black text-white rounded-lg px-1">2024</h3>
            <h3 className="">By  <span className="font-bold text-zinc-700">Pablo</span></h3>
            </div>
            <p className="text-center py-1">Collectible Name</p>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 border border-black rounded-lg"
            />
          </SwiperSlide> 
           <SwiperSlide className="bg-purple-300 p-2  text-xs rounded-lg">
            <div className="flex justify-between">
            <h3 className="bg-black text-white rounded-lg px-1">2024</h3>
            <h3 className="">By  <span className="font-bold text-zinc-700">Pablo</span></h3>
            </div>
            <p className="text-center py-1">Collectible Name</p>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 border border-black rounded-lg"
            />
          </SwiperSlide> 
           <SwiperSlide className="bg-purple-300 p-2  text-xs rounded-lg">
            <div className="flex justify-between">
            <h3 className="bg-black text-white rounded-lg px-1">2024</h3>
            <h3 className="">By  <span className="font-bold text-zinc-700">Pablo</span></h3>
            </div>
            <p className="text-center py-1">Collectible Name</p>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 border border-black rounded-lg"
            />
          </SwiperSlide>
{/*           
          <SwiperSlide>
            {" "}
            <Image
               src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 p-3 bg-purple-300 border border-black"

            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
            src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 p-3 bg-purple-300 border border-black"

            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
        src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 p-3 bg-purple-300 border border-black"

            />
          </SwiperSlide> */}
        </Swiper>
        </div>
     
      </div>
    </div>
  );
};

export default Slider;
