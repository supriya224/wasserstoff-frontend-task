import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IMG from "../../assets/img.jpeg";
import { Autoplay } from "swiper/modules";

const Slider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="container mx-auto w-auto">
      <div className="lg:max-w-md flex items-center justify-center px-9 overflow-x-hidden  ">
        <Swiper
          modules={[Autoplay]}
           autoplay
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <SwiperSlide
              key={index}
              className={`w-full bg-blue-500 transition-transform ${
                index === 3 ? "hover:scale-125" : "scale-50"
              } delay-300 duration-300 ease-in-out`}
            >
              <Image src={IMG} height={200} width={300} alt=""/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
