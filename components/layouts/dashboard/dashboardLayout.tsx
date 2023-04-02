import Aside from "@/components/dashboard/aside";
import { Props } from "@/lib/types/types";

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="grid grid-cols-2">
        <aside className="bg-lh-main">
          <Aside />
        </aside>

        <div>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
