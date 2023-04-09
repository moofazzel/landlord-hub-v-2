import EyeIcon from "@/components/icons/EyeIcon";
import PencilIcon from "@/components/icons/PencileIcon";
import ReplaceIcon from "@/components/icons/ReplaceIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import UploadIcon from "@/components/icons/UploadIcon";
import { useState } from "react";

function SinglePropertyTable() {
  const [showBtn, setShowBtn] = useState(false);

  const propertyButton =
    "text-xs md:text-lg font-medium border-[1px] border-[#A6A6A6] px-4 md:px-4 xl:px-5 py-2 md:py-4 bg-white hover:bg-lh-main hover:text-white shadow-md rounded-[3px] md:rounded-md transition-add duration-200";

  //  this handle show and hide item
  const handleShowBtn = (i) => {
    i === showBtn ? setShowBtn(false) : setShowBtn(i);
  };

  return (
    <div className="md:mt-[30px]">
      <div className="relative shadow-md rounded-[10px] md:rounded-[30px] p-3 md:p-4 lg:p-5 mx-3 md:mx-0 bg-white ">
        <div className="flex justify-between">
          <div className="space-x-5 mb-5">
            <button className={propertyButton}>2022</button>
            <button className={propertyButton}>2022</button>
          </div>
          <div>
            <button className={propertyButton}>Current Year</button>
          </div>
        </div>

        <div className="overflow-auto">
          <table className="w-full  lg:w[95%] relative table-auto text-xs xl:text-base text-left text-gray-500 overflow-auto">
            <thead className=" text-xs xl:text-base text-white shadow-md uppercase font-normal bg-lh-main">
              <tr>
                <th
                  scope="col"
                  className="px-4 xl:px-5 rounded-tl-lg font-medium"
                >
                  Date
                </th>
                <th scope="col" className="px-4 xl:px-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-4 xl:px-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-4 xl:px-5 font-medium">
                  Type
                </th>
                <th scope="col" className="px-4 xl:px-5 font-medium">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-4 xl:px-5 font-medium">
                  Recept
                </th>
                <th scope="col" className="px-3 font-medium rounded-tr-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((tdata, i) => (
                <tr
                  key={i}
                  className=" border-[#CCCCCC] border-b hover:bg-gray-50"
                >
                  <td
                    scope="row"
                    className="px-4 xl:px-5 font-medium text-gray-900 whitespace-nowrap "
                  >
                    2023-03-02
                  </td>
                  <td className="px-4 xl:px-5">Plumbing</td>
                  <td className="px-4 xl:px-5">5000$</td>
                  <td className="px-4 xl:px-5">Expense</td>
                  <td className="px-4 xl:px-5 text-right">
                    <button>Water Plumbing</button>
                  </td>
                  <td className="px-4 xl:px-5 text-right">
                    {i === 1 ? (
                      <button
                        title="View Receipt"
                        className="flex gap-2 items-center text-white bg-lh-main px-4 py-1.5 rounded-md"
                      >
                        <EyeIcon />
                        <span className="hidden lg:block">View Receipt</span>
                      </button>
                    ) : (
                      <button
                        title="Add receipt"
                        className="flex gap-2 items-center text-white bg-red-500 px-5 md:px-6 py-1.5 rounded-md hover:bg-red-600"
                      >
                        <UploadIcon />
                        <span className="hidden lg:block"> Add receipt</span>
                      </button>
                    )}
                  </td>

                  <td className="relative flex justify-center">
                    {/* Edit button */}

                    {/* animated button */}
                    <button
                      onClick={() => handleShowBtn(i)}
                      className={` ${
                        showBtn === i ? undefined : "animate-pulse"
                      } flex items-center justify-center space-x-1 lg:space-x-1.5 ml-2.5 mr-2 `}
                    >
                      <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-900 rounded-full del"></span>
                      <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-800 rounded-full"></span>
                      <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-700 rounded-full"></span>
                    </button>

                    <div className="flex gap-1 absolute -top-5 left-8">
                      {/* Edit Button */}
                      <button
                        title="Edit"
                        className={` border-none text-white bg-blue-900 transition-all duration-150  p-2 rounded hover:bg-blue-800  shadow-md
                        ${
                          showBtn === i
                            ? "visible opacity-100 delay-[100ms] translate-y-0 "
                            : "invisible delay-[300ms] opacity-0 translate-y-1  "
                        }`}
                      >
                        <PencilIcon className={"fill-white"} />
                      </button>

                      {/* Move Button */}
                      <button
                        title="Move"
                        className={` ${
                          showBtn === i
                            ? "visible delay-[200ms] opacity-100 translate-y-0 "
                            : "invisible delay-[200ms] opacity-0 translate-y-2 "
                        } transition-all duration-150 bg-blue-600 p-2 rounded hover:bg-blue-800 border-none text-white shadow-md z-50`}
                      >
                        <ReplaceIcon />
                      </button>

                      {/* Delete Button */}
                      <button
                        title="Delete"
                        className={` ${
                          showBtn === i
                            ? "visible delay-[300ms] opacity-100  translate-y-0"
                            : "invisible delay-[100ms] opacity-0 translate-y-3  "
                        } transition-all duration-150 bg-red-500 p-2 rounded hover:bg-red-600 border-none text-white shadow-md`}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SinglePropertyTable;
