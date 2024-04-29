"use client";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

const Page = () => {
  return (
    <MainLayout>
      <section className="bg-yellow-50 pb-12">
        <div className="h-screen flex items-center justify-center  ">
          <h3 className="flex gap-2 justify-center mx-12 text-center px-32 flex-wrap items-center uppercase text-6xl">
            we
            <Image
              src="https://media.istockphoto.com/id/1482176963/photo/dark-blue-background-with-confetti-horizontal.jpg?s=612x612&w=0&k=20&c=x_9bfxcVihdhPbQHPbgPnu-PxgJD9rM5dC-YgN62tzs="
              width={100}
              height={10}
              alt=""
              className="w-52 h-12 bg-cover object-cover hover:translate-x-5  duration-300 ease-in-out cursor-pointer "    
            />
            organize the connection{" "}
            <Image
              src="https://housing.com/news/wp-content/uploads/2022/11/landscape-design-compressed-1.jpg"
              width={100}
              height={10}
              alt=""
              className="w-52 h-12 bg-cover object-cover"     
            />
            <Image
            src="https://www.shutterstock.com/image-photo/hand-smartphone-records-live-music-260nw-743626063.jpg"
              width={100}
              height={10}
              alt=""
              className="w-52 h-12 bg-cover object-cover"    
            />{" "}
            between
            <Image
            src="https://imgix.ranker.com/list_img_v2/16527/2596527/original/rappers-with-best-live-performances-u1"
              width={100}
              height={10}
              className="w-52 h-12 bg-cover object-cover"    
              alt=""
            />{" "}
            music artist
            <Image
            src="https://www.wspa.com/wp-content/uploads/sites/53/2024/02/AdobeStock_221364834.jpeg?w=2560&h=1440&crop=1"
              width={100}
              height={10}
              className="w-52 h-12 bg-cover object-cover"    
              alt=""
            />
            culture{" "}
            <Image
            src="https://thumbs.dreamstime.com/b/selfie-concert-friends-taking-silhouette-night-scene-126628882.jpg"
              width={100}
              height={10}
              className="w-52 h-12 bg-cover object-cover"    
              alt=""
            />
            <Image
            src="https://southernbotanical.com/wp-content/uploads/2020/04/Introducing-the-Top-5-Flowers-for-Spring.jpg"
              width={100}
              height={10}
              alt=""
              className="w-52 h-12 bg-cover object-cover"    
            />
            art
            <Image
            src="https://www.dianeseeds.com/files/platycodon_grandiflorus_mariesii.jpg"
              width={100}
              height={10}
              alt=""
              className="w-52 h-12 bg-cover object-cover"    
            />{" "}
            & collection
          </h3>
        </div>
      <Button />

      </section>
    </MainLayout>
  );
};

export default Page;
