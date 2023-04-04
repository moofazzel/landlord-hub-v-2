import Aside from "@/components/dashboard/aside";
import { Props } from "@/lib/types/types";

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="flex">
        {/* Side bar */}

        <Aside />

        {/* All dashboard page goes here */}
        <div className="bg-lh-grey-200 w-full ">
          <div className="m-10">{children}</div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
