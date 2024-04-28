import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IMG from "../../assets/img.jpeg"

const Slider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div className="max-w-lg">
        <h4>collectible</h4>
        <div>
        <Swiper 
         modules={[Autoplay]}
         autoplay
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={IMG}
              height={100}
              width={100}
              alt=""
              className="w-48 bg-purple-300 p-3 border border-black"
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
        </Swiper>
        </div>
     
      </div>
    </div>
  );
};

export default Slider;
