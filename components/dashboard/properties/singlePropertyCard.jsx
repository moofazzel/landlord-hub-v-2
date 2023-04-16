import AddPhotoIcon from "@/components/icons/AddPhotoIcon";
import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PencilIcon from "@/components/icons/PencileIcon";
import RentIcon from "@/components/icons/RentIcon";
import VerticalDots from "@/components/icons/VerticalDots";
import CalculationModal from "@/components/properties/CalculationModal";
import { useDeletePropertyMutation } from "@/features/api/apiSlice";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

function SinglePropertyCard({ img, isLoading, property }) {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  const [calculationType, setCalculationType] = useState("");

  // Delete property mutation hook
  const [deleteProperty, { isLoading: isPropertyDeleting }] =
    useDeletePropertyMutation();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Open modal for calculation and set calculation type
  const handleCalculation = (e) => {
    if (e === "expense") {
      setIsOpen(true);
      setCalculationType(e);
    }
    if (e === "payment") {
      setIsOpen(true);
      setCalculationType(e);
    }
  };

  // Delete property
  const handleDeleteProperty = (id) => {
    // Delete property by ID
    deleteProperty(id).then(() => {
      // Redirect to properties page
      router.push("/dashboard/properties");
    });
  };

  const propertyButton =
    "w-full md:w-auto text-xs md:text-lg font-medium border-[1px] border-[#A6A6A6] px-4 sm:px-8 md:px-10 py-2.5 md:py-4 bg-white hover:bg-lh-main hover:text-white shadow-md rounded-[3px] md:rounded-md transition-add duration-200";
  return (
    <>
      <div className="rounded-[20px] bg-white mainShadow mt-3">
        <Image
          className="rounded-t-[20px] sm:w-full mx-auto"
          src={property?.img || img}
          alt=""
        />
        <div className="p-5">
          <div className=" flex justify-between  mb-5">
            <div
              className="
             md:text-xl lg:text-base xl:text-xl font-semibold text-lh-dark2 space-x-3"
            >
              <LocationIcon />
              <span className="text-base font-semibold">
                {isLoading ? (
                  <>street, city, state, zip</>
                ) : (
                  <>
                    {property?.street}, {property?.city}, {property?.state},
                    {property?.zip}
                  </>
                )}
              </span>
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
                        <button
                          onClick={() => handleDeleteProperty(property?._id)}
                          className="w-full text-base px-4 py-2 rounded-md text-left hover:bg-red-200 mb-3"
                        >
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
                <span className="text-xs md:text-base">2500</span>
              </div>
            </div>

            <div>
              <span className="md:text-lg font-medium ">
                <BathIcon /> Bath
              </span>
              <div className="text-base ml-10 lg:ml-0 xl:ml-10">3</div>
            </div>

            <div>
              <span className="md:text-lg font-medium ">
                <BedIcon /> Bed
              </span>
              <div className="text-xs md:text-lg ml-10 lg:ml-0 xl:ml-10">3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-between mt-[30px]">
        <button
          onClick={() => handleCalculation("expense")}
          className={`${propertyButton} text-red-500 border-red-500 hover:bg-red-500 hover:text-white `}
        >
          Add Expense
        </button>
        <button
          onClick={() => handleCalculation("payment")}
          className={`${propertyButton} text-lh-main border-lh-main `}
        >
          Add Payment
        </button>
        <button className={propertyButton}>Export</button>
      </div>

      {/* Add Calculation(Payment and Expense) Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hiddenf rounded-[20px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Calculation / payment / expense modal component */}
                  <CalculationModal
                    calculationType={calculationType}
                    closeModal={closeModal}
                    property={property}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SinglePropertyCard;
