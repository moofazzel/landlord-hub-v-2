function DashDataTable() {
  const propertyButton =
    "text-xs md:text-lg font-medium border-[1px] border-[#A6A6A6] px-6 md:px-10 py-2.5 md:py-4 bg-white hover:bg-lh-main hover:text-white shadow-md rounded-md transition-add duration-200";

  return (
    <div className="relative shadow-md md:rounded-[15px] p-4 md:p-5 bg-white overflow-hidden">
      <div className="flex justify-end">
        <div className="mb-4 space-x-4">
          <button className={propertyButton}>Copy</button>
          <button className={propertyButton}>Export</button>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="w-full text-sm text-left text-gray-500 overflow-x-auto">
          <thead className="text-md text-white uppercase font-normal bg-lh-main">
            <tr>
              <th scope="col" className="px-10 rounded-tl-lg font-medium">
                Property
              </th>
              <th scope="col" className="px-10 font-medium">
                Date
              </th>
              <th scope="col" className="px-10 font-medium">
                Category
              </th>
              <th scope="col" className="px-10 font-medium">
                Amount
              </th>
              <th scope="col" className="px-10 font-medium rounded-tr-lg">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-lh-grey-300 border-[#CCCCCC] border-b hover:bg-gray-50">
              <td
                scope="row"
                className="px-10 font-medium text-gray-900 whitespace-nowrap "
              >
                Main Road Najirghat, CA
              </td>
              <td className="px-10">2023-03-27</td>
              <td className="px-10">Laptop</td>
              <td className="px-10">111</td>
              <td className="px-10">helo there</td>
            </tr>
            <tr className="bg-lh-grey-300 border-[#CCCCCC] border-b hover:bg-gray-50">
              <td
                scope="row"
                className="px-10 font-medium text-gray-900 whitespace-nowrap "
              >
                Main Road Najirghat, CA
              </td>
              <td className="px-10">2023-03-27</td>
              <td className="px-10">Laptop</td>
              <td className="px-10">111</td>
              <td className="px-10">helo there</td>
            </tr>
            <tr className="bg-lh-grey-300 border-[#CCCCCC] border-b hover:bg-gray-50">
              <td
                scope="row"
                className="px-10 font-medium text-gray-900 whitespace-nowrap "
              >
                Main Road Najirghat, CA
              </td>
              <td className="px-10">2023-03-27</td>
              <td className="px-10">Laptop</td>
              <td className="px-10">111</td>
              <td className="px-10">helo there</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashDataTable;
