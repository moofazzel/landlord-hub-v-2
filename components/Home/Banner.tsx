import Image from "next/image";

import heroImage from "../../public/Assets/images/heroImage.png";
import BlueShape from "@/public/Assets/shapes/BlueShape";

function Banner() {
  return (
    <>
      <section className="relative mt-10 md:mt-24 lg:mt-36 mb-16 md:mb-24 lg:mb-48">
        {/* shape  */}
        <div className="absolute -top-60 -left-24 z-0">
          <BlueShape />
        </div>
        <div className="flex gap-5 flex-col-reverse lg:flex-row justify-between items-center">
          <div className="">
            <h1 className="text-5xl md:text-7xl md:text-[80px] font-bold md:leading-[92px]">
              <span className="text-[#0d0d0d]"> Real Estate</span> <br />
              <span className="text-lh-main">Simplified</span>
            </h1>
            <p className="lg:max-w-[25.7rem] text-xl md:text-3xl text-[#4b4b4b] mt-[1.37rem] mb-8">
              Take the stress out of your real estate finances with our simple,
              but powerful, software solution.
            </p>
            <button className="bgGradient text-white px-11 py-4 rounded-md">
              Get Started Ready!
            </button>
          </div>
          <div className="relative">
            <Image
              className="ml-auto max-w-[90%]"
              src={heroImage}
              alt="Hero banner image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
