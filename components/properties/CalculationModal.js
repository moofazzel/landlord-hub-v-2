import { Fragment, useEffect } from "react";

import { useCreateCalculationMutation } from "@/features/api/apiSlice";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";

function CalculationModal({ isOpen, setIsOpen, calculationType, property }) {
  const user = useSelector(selectUser);

  // Create Property AND Send to DB
  const [createCalculation, { isSuccess, isError }] =
    useCreateCalculationMutation();

  // GET TODAY'S DATE
  //   FIX: NEED TO LOOK INTO THIS IF ITS NOT WORKING
  const today = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);

      toast.success("Created Successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (isError) {
      setIsOpen(false);

      toast.error(`Failed to Create ${calculationType}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [isSuccess, isError]);

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const calculations = {
      propertyId: property?._id,
      propertyOwner: user?.email,
      date: from.date.value,
      category: from.category.value,
      amount: from.amount.value,
      description: from.description.value,
      calculationType,
      street: property?.street,
      city: property?.city,
      state: property?.state,
      zip: property?.zip,
    };

    // SEND CALCULATIONS TO DB
    createCalculation(calculations);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
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
                  <div className="modal-box relative">
                    {/* modal close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className=" w-8 h-8 rounded-full btn btn-sm btn-circle absolute right-0 top-0 hover:bg-red-500 hover:text-white"
                    >
                      ✕
                    </button>
                    <h3 className="text-xl font-bold text-lh-main">
                      Add New {calculationType}
                    </h3>
                    <form
                      onSubmit={handlePropertySubmit}
                      className="grid grid-cols-1 gap-3 mt-8"
                    >
                      <input
                        type="date"
                        name="date"
                        defaultValue={today}
                        placeholder="Date"
                        className="input w-full rounded-[10px] cursor-pointer"
                        required
                      />

                      <input
                        name="category"
                        type="text"
                        placeholder="Category"
                        className="input w-full rounded-[10px]"
                      />
                      <input
                        name="amount"
                        type="number"
                        placeholder="Amount"
                        className="input w-full rounded-[10px]"
                      />

                      {/* Only show for expense */}
                      {calculationType === "expense" && (
                        <div>
                          <span className="pb-2 block">Upload Receipt</span>
                          <label for="large-file-input" class="sr-only">
                            Choose file
                          </label>
                          <input
                            type="file"
                            name="file"
                            id="large-file-input"
                            class="block w-full border border-lh-grey shadow-sm rounded-[10px] text-sm focus:z-10 focus:border-blue focus:ring-blue 
     file:border-0 file:text-white
    file:bg-red-500 file:mr-4
    file:py-3 file:px-4 file:sm:py-5 file:cursor-pointer"
                          />
                        </div>
                      )}

                      <textarea
                        className="input w-full rounded-[10px]"
                        placeholder="Description"
                        name="description"
                        maxLength={100}
                        required
                      ></textarea>

                      <button
                        className="bgGradient text-white px-11 py-4 rounded-[10px] hover:bgGradientHover"
                        type="submit"
                      >
                        ADD
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CalculationModal;
