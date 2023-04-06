import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../public/Assets/icons/logo_blue.svg";
import HamburgerIcon from "../icons/HamburgerIcon";
import MobileSideNav from "./main/mobileSideNav";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="bg-white navShadow py-2.5">
        {/* TODO: Change css  */}
        <div className="max-w-[1536px]f mx-autof container px-3 flex items-center justify-between">
          <button className="md:hidden" onClick={() => setShow(!show)}>
            <HamburgerIcon className="" />
          </button>
          <Image
            className="mx-auto md:mx-0 w-[180px] md:w-[200px] "
            src={logoBlue}
            alt=""
          />
          <nav className="space-x-12 hidden md:block">
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link
              className="bgGradient text-white px-11 py-4 rounded-md"
              href={"/login"}
            >
              Login
            </Link>
          </nav>
        </div>
        <div>
          <MobileSideNav show={show} setShow={setShow} />
        </div>
      </header>
    </>
  );
}

export default Navbar;
