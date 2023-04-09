import Aside from "@/components/dashboard/aside";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  // Protect from unauthenticated users
let session
let status



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
            <div className="md:bg-lh-grey-200 w-full h-full md:ml-[110px] lg:ml-[300px]">
              <div className="my-10">{children}</div>
            </div>
          </div>
        </main>
      )
    </>
  );
};

export default DashboardLayout;
