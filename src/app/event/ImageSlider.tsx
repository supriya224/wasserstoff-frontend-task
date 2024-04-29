import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IMG from "../../assets/img.jpeg"

const ImageSlider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-4xl px-2">
        <Swiper
         modules={[Autoplay]}
         autoplay={{ delay: 900 }}
          spaceBetween={15}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}

        >
          <SwiperSlide>
            <Image
              src="https://i.pinimg.com/564x/4e/ef/2a/4eef2a7e88a81e57d9f8ccb1be02ab91.jpg"
              height={400}
              width={1100}
              alt=""
              className="w-[100vw] h-[60vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://www.format.com/wp-content/uploads/cheers-event-photography.jpg"
              height={400}
              width={100}
              alt=""
              className="w-[70rem] h-[60vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.pinimg.com/originals/4a/ee/68/4aee688497699c04b0c54645b0d883ee.jpg"
              height={400}
              width={100}
              alt=""
              className="w-[70rem] h-[60vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={IMG}
              height={400}
              width={100}
              alt=""
              className="w-[70rem] h-[60vh]  "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
