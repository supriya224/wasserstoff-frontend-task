"use client";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";
import IMG from "../../assets/img.jpeg"
import Button from "@/app/components/Button/Button";

const Page = () => {

  return (
    <MainLayout>
      <section>
        <div className="h-screen flex items-center justify-center ">
         <h3 className=" uppercase">
         we <Image src={IMG} width={100} height={30} alt=""/>
          organize the connection between music artist culture art & collection
         </h3>
        </div>
      </section>
      <Button/>
    </MainLayout>
  );
};

export default Page;
