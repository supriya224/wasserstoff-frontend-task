import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IMG from "../../assets/img.jpeg"
import IMG1 from "../../assets/img1.png"
import IMG2 from "../../assets/image 14.png"
import IMG3 from "../../assets/image 12.png"

const ImageSlider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-4xl py-32 h-fit w-fit overflow-hidden">
        <Swiper
         modules={[Autoplay]}
         autoplay={{ delay: 900 }}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}

        >
          <SwiperSlide>
            <Image
              src={IMG3}
              height={500}
              width={1000}
              alt=""
              className="w-[80rem] h-[70vh]"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Image
              src={IMG}
              height={500}
              width={1000}
              alt=""
              className="w-[80rem] h-[70vh]  "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={IMG1}
              height={500}
              width={1000}
              alt=""
              className="w-[80rem] h-[70vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={IMG2}
              height={500}
              width={1000}
              alt=""
              className="w-[80rem] h-[70vh]"
            />
          </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;