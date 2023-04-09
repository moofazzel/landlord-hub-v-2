import AddPhotoIcon from "@/components/icons/AddPhotoIcon";
import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PencilIcon from "@/components/icons/PencileIcon";
import RentIcon from "@/components/icons/RentIcon";
import VerticalDots from "@/components/icons/VerticalDots";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

function SinglePropertyCard({
  openModal,
  img,
  location,
  rent,
  bath,
  bed,
}) {
  const propertyButton =
    "w-full md:w-auto text-xs md:text-lg font-medium border-[1px] border-[#A6A6A6] px-4 sm:px-8 md:px-10 py-2.5 md:py-4 bg-white hover:bg-lh-main hover:text-white shadow-md rounded-[3px] md:rounded-md transition-add duration-200";
  return (
    <>
      <div className="rounded-[20px] bg-white mainShadow mt-3">
        <Image
          className="rounded-t-[20px] sm:w-[80%] mx-auto"
          src={img}
          alt=""
        />
        <div className="p-5">
          <div className=" flex justify-between  mb-5">
            <div
              className="
             md:text-xl lg:text-base xl:text-xl font-semibold text-lh-dark2 space-x-3"
            >
              <LocationIcon />
              <span>{location}</span>
            </div>
            {/*  */}
            <div className=" space-x-3">
              {/* Upload photo icon */}
              <button
                type="button"
                onClick={openModal}
                title="Upload Photo"
                className="sm:bg-[#E4EAFF] hover:bg-lh-main sm:py-2 px-1 md:px-3 rounded-md group transition-all duration-200"
              >
                <AddPhotoIcon className={"inline group-hover:fill-white"} />
              </button>

              {/* Edit photo icon */}
              <button
                type="button"
                onClick={openModal}
                title="Edit"
                className="sm:bg-[#E4EAFF] hover:bg-lh-main sm:py-2 px-1 md:px-3 rounded-md group transition-all duration-200"
              >
                <PencilIcon className={"inline group-hover:fill-white"} />
              </button>

              {/* show more photo icon dropdown using tailwind headless UI */}

              <Menu as="div" className="relative inline-block text-left">
                <>
                  <Menu.Button
                    title="More Options"
                    className="sm:bg-[#E4EAFF] hover:bg-lh-main sm:py-2 px-1 md:px-4 rounded-md group transition-all duration-200"
                  >
                    <VerticalDots className={"inline group-hover:fill-white"} />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-50"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-50"
                  >
                    <Menu.Items className="absolute right-0 -top-[140px] p-2 w-56 origin-bottom-right rounded-xl bg-white shadow-xl">
                      <Menu.Item>
                        <button className="w-full text-base px-4 py-2 rounded-md text-left hover:bg-[#E4EAFF] mb-3">
                          Delete
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="w-full text-base px-4 py-2 rounded-md text-left hover:bg-[#E4EAFF] mb-3">
                          Archive
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              </Menu>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="md:text-lg font-medium ">
                <RentIcon /> Rent
              </span>
              <div className="text-xs lg:text-xs xl:text-lg ml-10 lg:ml-0 xl:ml-10">
                <span className="text-xs md:text-base">$</span>
                <span className="text-xs md:text-base">{rent}</span>
              </div>
            </div>

            <div>
              <span className="md:text-lg font-medium ">
                <BathIcon /> Bath
              </span>
              <div className="text-base ml-10 lg:ml-0 xl:ml-10">{bath}</div>
            </div>

            <div>
              <span className="md:text-lg font-medium ">
                <BedIcon /> Bed
              </span>
              <div className="text-xs md:text-lg ml-10 lg:ml-0 xl:ml-10">
                {bed}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-between mt-[30px]">
        <button className={propertyButton}>Add Expense</button>
        <button className={propertyButton}>Add Payment</button>
        <button className={propertyButton}>Export</button>
      </div>
    </>
  );
}

export default SinglePropertyCard;
