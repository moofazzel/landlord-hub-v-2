import Aside from "@/components/dashboard/aside";
import { Props } from "@/lib/types/types";
import Navbar from "../Navbar";

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main>
        <div className="md:hidden block ">
          <Navbar />
        </div>
        {/* Side bar */}
        <div className="flex">
          <Aside />

          {/* All dashboard page goes here */}
          <div className="bg-lh-grey-200 w-full md:ml-[110px] lg:ml-[300px]">
            <div className="my-10">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
