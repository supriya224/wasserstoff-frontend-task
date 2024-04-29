import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IMG from "../../assets/img.jpeg";
import { Autoplay } from "swiper/modules";

const Slider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-md px-9 ">
        <Swiper
          modules={[Autoplay]}
           autoplay
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          // autoplay={{ delay: 3000 }}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <SwiperSlide
              key={index}
              className={`transition-transform ${
                index === 3 ? "hover:scale-150" : "scale-50"
              } delay-300 duration-300 ease-in-out`}
            >
              <Image src={IMG} height={100} width={100} alt="" className="active:scale-150 delay-300 duration-300 ease-in-out"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
