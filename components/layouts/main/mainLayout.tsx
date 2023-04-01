import { Props } from "@/lib/types/types";
import Navbar from "../Navbar";

function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
