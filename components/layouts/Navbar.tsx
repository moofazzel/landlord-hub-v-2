import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../public/Assets/icons/logo_blue.svg";
import HamburgerIcon from "../icons/HamburgerIcon";

function Navbar() {
  return (
    <>
      <header className="bg-white navShadow py-2.5">
        <div className="max-w-[1536px] px-3 flex items-center justify-between">
          <HamburgerIcon className="md:hidden" />
          <Image
            className="mx-auto md:mx-0 w-[140px] md:w-[200px] "
            src={logoBlue}
            alt=""
          />
          <nav className="space-x-12 hidden md:block">
            <Link href={"/"}>Home</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link
              className="bgGradient text-white px-11 py-4 rounded-md"
              href={"/login"}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
