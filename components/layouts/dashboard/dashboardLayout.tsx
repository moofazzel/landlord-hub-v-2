import { Props } from "@/lib/types/types";
import Link from "next/link";

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <header>this i s header dashboard</header>
      <main className="grid grid-cols-2">
        <aside>
          <Link href={"/dashboard"}>dashboard</Link>
          <Link href={"/dashboard/properties"}>properties</Link>
        </aside>

        <div>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
