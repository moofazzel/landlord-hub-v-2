import Image from "next/image";

import heroImage from "../../public/Assets/images/heroImage.png";

function Banner() {
  return (
    <>
      <section className="mt-10 mb-14 ">
        <div className="flex gap-5 flex-col-reverse lg:flex-row justify-between items-center">
          <div>
            <h1 className="text-7xl font-bold">
              <span className="text-[#0d0d0d]"> Real Estate</span> <br />
              <span className="text-lh-main">Simplified</span>
            </h1>
            <p className="lg:max-w-[25.7rem] text-3xl text-[#4b4b4b] mt-[1.37rem] mb-8">
              Take the stress out of your real estate finances with our simple,
              but powerful, software solution.
            </p>
            <button className="bgGradient text-white px-11 py-4 rounded-md">
              Get Started Ready!
            </button>
          </div>
          <div className="relative">
            <Image src={heroImage} alt="Hero banner image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
