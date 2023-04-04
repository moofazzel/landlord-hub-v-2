import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import DownArrow from "../icons/DownArrow";

function DashDropdown({ properties, title }: any) {
  const [selected, setSelected] = useState(properties[0]);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div>
          <div className="text-[10px]">
            {title} <DownArrow />
          </div>
          <div className="relative mt-1">
            <Listbox.Button className=" text-xs md:text-base font-medium rounded-md px-4 md:px-8 py-2 md:py-4 border border-lh-dark2">
              <span className="block truncate">{selected.value}</span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in-out duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-2 border max-h-60 min-w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {properties.map((property, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      ` cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-lh-grey-200 text-lh-dark2"
                          : "text-gray-900"
                      }`
                    }
                    value={property}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {property.value}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      </Listbox>
    </>
  );
}

export default DashDropdown;
