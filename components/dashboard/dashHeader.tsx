import UserAvatar from "../layouts/dashboard/userAvatar";
import DashDropdown from "./dashDropdown";

function DashHeader({ properties, years, months }: any) {
  return (
    <>
      <header className="flex justify-between items-center bg-white px-4 md:px-6 lg:px-8 py-2.5">
        <div className="flex gap-2.5 md:gap-8">
          <DashDropdown title={"Select Property"} properties={properties} />
          <DashDropdown title={"Select Years"} properties={years} />
          <DashDropdown title={"Select Month"} properties={months} />
        </div>
        <div className="hidden md:block">
          <UserAvatar />
        </div>
      </header>
    </>
  );
}

export default DashHeader;
