import Aside from "@/components/dashboard/aside";
import { Props } from "@/lib/types/types";

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="flex">
        {/* Side bar */}

        <Aside />

        {/* All dashboard page goes here */}
        <div>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
