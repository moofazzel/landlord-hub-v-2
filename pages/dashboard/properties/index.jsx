import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";
import PropertyCard from "@/components/dashboard/properties/propertyCard";
import Link from "next/link";

import house from "../../../public/Assets/images/housejpg.jpg";
import PropertiesHeader from "@/components/layouts/propertiesHeader";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AddPropertyModal from "@/components/properties/AddPropertyModal";
import { useGetPropertiesQuery } from "@/features/api/apiSlice";

function Properties() {
  let [isOpen, setIsOpen] = useState(false);

  const { data: properties, isLoading } = useGetPropertiesQuery();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Properties Header */}
      <div className="sticky top-0 navShadow">
        <PropertiesHeader openModal={openModal} />
      </div>

      {/* Properties Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-8 mt-10 mx-3 md:mx-0">
        {properties?.map((property, i) => (
          <Link href={`/dashboard/properties/${property._id}`} key={i}>
            <PropertyCard
              street={property.street}
              city={property.city}
              state={property.state}
              zip={property.zip}
              img={house}
              rent={2500}
              bath={3}
              bed={3}
            />
          </Link>
        ))}
      </div>

      {/* Add Property Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                  {/* property modal component */}
                  <AddPropertyModal closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

Properties.Layout = DashboardLayout;

export default Properties;
