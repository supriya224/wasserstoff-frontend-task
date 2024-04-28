import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ImageSlider: React.FC<{ images: string[] }> = () => {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="max-w-5xl">
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
              src="https://i.pinimg.com/originals/4a/ee/68/4aee688497699c04b0c54645b0d883ee.jpg"
              height={100}
              width={100}
              alt=""
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://www.format.com/wp-content/uploads/cheers-event-photography.jpg"
              height={100}
              width={100}
              alt=""
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://i.pinimg.com/originals/4a/ee/68/4aee688497699c04b0c54645b0d883ee.jpg"
              height={100}
              width={100}
              alt=""
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://cdn.pixabay.com/photo/2023/08/11/04/51/fireworks-8182800_1280.jpg"
              height={100}
              width={100}
              alt=""
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
