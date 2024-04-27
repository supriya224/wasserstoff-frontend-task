import Button from "@/components/Button/Button";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

const Page = () => {
  return (
    <MainLayout>
      <section>
        <div  className="container mx-auto w-auto">

     
        <header>
          <Image
            width={100}
            height={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJYfzMgQR4SRNg0S4DJxaYbSPjbFeUCtelg&usqp=CAU"
            alt=""
          />
        </header>
        <h3 className="w-1/2 text-9xl font-extrabold">Astrix Events</h3>
        </div>
      </section>

    </MainLayout>
  );
};

export default Page;
