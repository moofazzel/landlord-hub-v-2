import EyeIcon from "@/components/icons/EyeIcon";
import PencilIcon from "@/components/icons/PencileIcon";
import ReplaceIcon from "@/components/icons/ReplaceIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import UploadIcon from "@/components/icons/UploadIcon";
import { useGetCalculationsQuery } from "@/features/api/apiSlice";
import { useEffect, useState } from "react";

function SinglePropertyTable({ allCalculations, isCalcDataLoading }) {
  const [showBtn, setShowBtn] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [calculations, setCalculations] = useState([]);

  // Function to get all unique years from array of objects
  const getAllYears = (dataArray) => {
    // Use Set to store unique years
    const yearsSet = new Set();
    dataArray?.forEach((item) => yearsSet.add(item.date.slice(0, 4)));
    // Convert Set back to array
    const yearsArray = Array.from(yearsSet);
    return yearsArray;
  };

  // All unique years from calculations
  const allYears = getAllYears(allCalculations);

  useEffect(() => {
    // Filter calculations by year
    const filterByYear = allCalculations?.filter(
      (item) => item.date.slice(0, 4) == year
    );
    setCalculations(filterByYear);
  }, [year, allCalculations]);

  const propertyButton =
    "text-xs md:text-lg font-medium border-[1px] border-[#A6A6A6] px-4 md:px-4 xl:px-5 py-2 md:py-4 bg-white hover:bg-lh-main hover:text-white shadow-md rounded-[3px] md:rounded-md transition-add duration-200";

  //  this handle show and hide item when click on action button
  const handleShowBtn = (i) => {
    i === showBtn ? setShowBtn(false) : setShowBtn(i);
  };
  console.log(calculations);

  return (
    <>
      <div className="md:mt-[30px]">
        <div className="relative shadow-md rounded-[10px] md:rounded-[30px] p-3 md:p-4 lg:p-5 mx-3 md:mx-0 bg-white ">
          {allCalculations?.length === 0 && (
            <p className="text-lg text-lh-dark-300 font-bold py-4">
              Please add expense or payment to see details
            </p>
          )}
          {calculations?.length > 0 && (
            <>
              <div className="flex justify-between">
                <div className="space-x-5 mb-5">
                  {allYears.map((item, i) => (
                    <button
                      onClick={() => setYear(item)}
                      key={i}
                      className={`${propertyButton} ${
                        year == item && `!bg-lh-main text-white`
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => setYear(new Date().getFullYear())}
                    className={`${propertyButton} ${
                      year === new Date().getFullYear() && "hidden"
                    }`}
                  >
                    Current Year
                  </button>
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
                      <th
                        scope="col"
                        className="px-3 font-medium rounded-tr-lg"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.map((calc) => {
                      return (
                        <tr
                          key={calc._id}
                          className={` ${
                            calc.calculationType === "expense"
                              ? "text-red-500 hover:bg-red-50"
                              : "text-green-500"
                          } border-[#CCCCCC] border-b last:border-none hover:bg-green-50`}
                        >
                          <td
                            scope="row"
                            className="px-4 xl:px-5 font-medium whitespace-nowrap "
                          >
                            {calc.date.slice(0, 10)}
                          </td>
                          <td className="px-4 xl:px-5"> {calc.category} </td>
                          <td className="px-4 xl:px-5">${calc.amount}</td>
                          <td className="px-4 xl:px-5">
                            {calc?.calculationType}
                          </td>
                          <td className="px-4 xl:px-5 ">{calc.description}</td>

                          {calc.calculationType === "expense" ? (
                            <td className="px-4 xl:px-">
                              {calc?.receipt ? (
                                <button
                                  title="View Receipt"
                                  className="flex gap-2 items-center text-xs text-white bg-lh-main px-4 py-1.5 rounded-md"
                                >
                                  <EyeIcon />
                                  <span className="hidden lg:block">
                                    View Receipt
                                  </span>
                                </button>
                              ) : (
                                <button
                                  title="Add receipt"
                                  className="flex gap-2 items-center text-xs text-white bg-red-500 px-3 py-1.5 rounded-md hover:bg-red-600"
                                >
                                  <UploadIcon />
                                  <span className="hidden lg:block">
                                    Add receipt
                                  </span>
                                </button>
                              )}
                            </td>
                          ) : (
                            <td></td>
                          )}

                          <td className="relative flex justify-center">
                            {/* Edit /actions button */}

                            {/* animated button */}
                            <button
                              onClick={() => handleShowBtn(calc._id)}
                              title="Actions"
                              className={` ${
                                showBtn === calc._id
                                  ? undefined
                                  : "animate-pulse"
                              } flex items-center justify-center space-x-1 lg:space-x-1.5 ml-2.5 mr-2 `}
                            >
                              <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-900 rounded-full del"></span>
                              <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-800 rounded-full"></span>
                              <span className=" w-1 lg:w-1.5  h-1 lg:h-1.5 bg-blue-700 rounded-full"></span>
                            </button>

                            <div className="flex gap-1 absolute -top-5 left-1">
                              {/* Edit Button */}
                              <button
                                title="Edit"
                                className={` border-none text-white bg-blue-900 transition-all duration-150  p-2 rounded hover:bg-blue-800  shadow-md
                        ${
                          showBtn === calc?._id
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
                                  showBtn === calc?._id
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
                                  showBtn === calc?._id
                                    ? "visible delay-[300ms] opacity-100  translate-y-0"
                                    : "invisible delay-[100ms] opacity-0 translate-y-3  "
                                } transition-all duration-150 bg-red-500 p-2 rounded hover:bg-red-600 border-none text-white shadow-md`}
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SinglePropertyTable;
