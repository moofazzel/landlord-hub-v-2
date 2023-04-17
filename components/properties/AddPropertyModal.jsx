import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import PointerEventIcon from "../icons/PointerEventIcon";
import { useCreatePropertyMutation } from "@/features/api/apiSlice";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";
import { toast } from "react-toastify";
import CheckIcon from "../icons/CheckIcon";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
];

function AddPropertyModal({ closeModal }) {
  const [selected, setSelected] = useState(people[0]);

  const user = useSelector(selectUser);

  // Create Property AND Send to DB
  const [createProperty, { isSuccess, isError }] = useCreatePropertyMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();

      toast.success("Property Created Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (isError) {
      closeModal();

      toast.error("Failed to Create Property", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [isSuccess, isError, closeModal]);

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const property = {
      email: user?.email,
      street: from.street.value,
      city: from.city.value,
      state: selected.name,
      zip: from.zip.value,
    };

    // SEND TO DB
    createProperty(property);
  };

  return (
    <>
      <div className="modal-box relative">
        <button
          onClick={closeModal}
          className=" w-8 h-8 rounded-full btn btn-sm btn-circle absolute right-0 top-0 hover:bg-red-500 hover:text-white"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-lh-main">Add New Property</h3>
        <form
          onSubmit={handlePropertySubmit}
          className="grid grid-cols-1 gap-3 mt-8"
        >
          <input
            name="street"
            type="text"
            placeholder="Street"
            className="input w-full rounded-[10px]"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            className="input w-full rounded-[10px]"
          />

          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-[10px] input text-left ">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <PointerEventIcon />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2.5 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-blue-100 text-blue-900 font-bold"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                              <CheckIcon />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          <input
            name="zip"
            type="text"
            placeholder="ZIP"
            className="input w-full rounded-[10px]"
            maxLength={5}
          />

          <button
            className="bgGradient text-white px-11 py-4 rounded-[10px] hover:bgGradientHover"
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPropertyModal;
