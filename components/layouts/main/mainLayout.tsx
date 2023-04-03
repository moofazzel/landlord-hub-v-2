import { Props } from "@/lib/types/types";
import Navbar from "../Navbar";
// import mainNavbar from "../Navbar";

function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
