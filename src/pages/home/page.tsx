"use client";
import Button from "@/app/components/Button/Button";
import ImageSlider from "@/app/collection/ImageSlider";
import MainLayout from "@/app/layouts/MainLayout";

const Page = () => {

  return (
    <MainLayout>
      <section>
        <div className="container mx-auto w-auto pt-5">
          <header>
            <h3 className="">Astrix. </h3>
          </header>
          <h3 className="w-1/2 text-9xl font-extrabold">Astrix Events</h3>
          <div className="container mx-auto mt-8">
            <ImageSlider images={[]} />
          </div>
          <Button/>
        </div>
      </section>
      
    </MainLayout>
  );
};

export default Page;
