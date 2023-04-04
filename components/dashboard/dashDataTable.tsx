function DashDataTable() {
  return (
    <div className="relative overflow-x-auto shadow-md md:rounded-[15px] p-4 md:p-5 bg-white">
      <table className="w-full text-sm text-left text-gray-500 overflow-auto">
        <thead className="text-md text-white uppercase font-normal bg-lh-main">
          <tr>
            <th scope="col" className="px-10 py-4 rounded-tl-lg font-medium">
              Date
            </th>
            <th scope="col" className="px-10 py-4 font-medium">
              Category
            </th>
            <th scope="col" className="px-10 py-4 font-medium">
              Amount
            </th>
            <th scope="col" className="px-10 py-4 font-medium">
              DESCRIPTION
            </th>
            <th scope="col" className="px-10 py-4 font-medium rounded-tr-lg">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-lh-grey-200 border-b hover:bg-gray-50">
            <td
              scope="row"
              className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Apple MacBook Pro 17"
            </td>
            <td className="px-10 py-4">Silver</td>
            <td className="px-10 py-4">Laptop</td>
            <td className="px-10 py-4">$2999</td>
            <td className="px-10 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-lh-grey-200 border-b  hover:bg-gray-50 ">
            <td
              scope="row"
              className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Microsoft Surface Pro
            </td>
            <td className="px-10 py-4">White</td>
            <td className="px-10 py-4">Laptop PC</td>
            <td className="px-10 py-4">$1999</td>
            <td className="px-10 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className=" bg-lh-grey-200 hover:bg-gray-50">
            <td
              scope="row"
              className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Magic Mouse 2
            </td>
            <td className="px-10 py-4">Black</td>
            <td className="px-10 py-4">Accessories</td>
            <td className="px-10 py-4">$99</td>
            <td className="px-10 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashDataTable;
