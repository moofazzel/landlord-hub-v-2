import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function CalculationEditModal({ isEditOpen, setIsEditOpen }) {
  return (
    <>
      <Transition appear show={isEditOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsEditOpen(false)}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="modal-box relative">
                    {/* modal close button */}
                    <button
                      onClick={() => setIsEditOpen(false)}
                      className=" w-8 h-8 rounded-full btn btn-sm btn-circle absolute right-0 top-0 hover:bg-red-500 hover:text-white"
                    >
                      ✕
                    </button>
                    <h3 className="text-xl font-bold text-lh-main">Add New</h3>
                    <form
                      //   onSubmit={handlePropertySubmit}
                      className="grid grid-cols-1 gap-3 mt-8"
                    >
                      <input
                        type="date"
                        name="date"
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

export default CalculationEditModal;
