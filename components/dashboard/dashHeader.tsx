import UserAvatar from "../layouts/dashboard/userAvatar";
import DashDropdown from "./dashDropdown";

function DashHeader({ properties, years, months }: any) {
  return (
    <>
      <header className="flex justify-between items-center bg-white px-5 py-2.5 rounded-[15px]">
        <div className="flex gap-8">
          <DashDropdown title={"Select Property"} properties={properties} />
          <DashDropdown title={"Select Years"} properties={years} />
          <DashDropdown title={"Select Month"} properties={months} />
        </div>
        <div>
          <UserAvatar />
        </div>
      </header>
    </>
  );
}

export default DashHeader;
