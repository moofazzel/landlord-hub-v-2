import DotIcon from "../icons/DotIcon";

import clipboard from "../../public/Assets/images/clipboard.png";
import Image from "next/image";
import BlueShape from "@/public/Assets/shapes/BlueShape";

function WhatCanDo() {
  return (
    <section className="mt-20 lg:mt-[120px] relative">
      {/* shape  */}
      <div className="absolute top-96 -left-40">
        <BlueShape />
      </div>

      <h2 className=" max-w-[540px] mx-auto text-2xl sm:text-3xl md:text-4xl text-center font-bold text-lh-dark2 md:leading-[50px]">
        What can Landlord Hub do for you?
      </h2>

      <hr className=" mt-8 mb-5 md:mb-10 w-[50%] mx-auto border-[#4b4b4b]" />

      <div className="flex gap-5 flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <Image className="mr-auto" src={clipboard} alt="" />
        </div>

        <div className="flex-1">
          <h2 className="text-[30px] font-semibold text-lh-dark2 mb-12">
            Add properties and track expenses
          </h2>
          <ul className="ml-5 space-y-10 flex-1">
            <li>
              <DotIcon />
              Add each property you own into our intuitive database. Add unique
              details such as rent, lease status, and even take custom notes for
              later reference.
            </li>
            <li>
              <DotIcon />
              Track your expenses and payments with our easy-to-use expense log.
              You can even upload pictures of your receipts so you no longer
              have to store hard copies.
            </li>
            <li>
              <DotIcon />
              Sort your properties into logical groups. Own multiple LLCs? Are
              you in a partnership? Organize your properties into groups and
              share access with other users for a collaborative experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatCanDo;
