import Image from "next/image";
import NavLink from "../common/NavLink";
import logoWhite from "../../public/Assets/images/logo_white.svg";
import logoShort from "../../public/Assets/images/logoShort.svg";
import HomeIcon from "../icons/HomeIcon";
import DashIcon from "../icons/DashIcon";
import PropertyIcon from "../icons/PropertyIcon";
import LogoutIcon from "../icons/LogoutIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import { useState } from "react";

function Aside() {
  // const ShowHiddenClass = {`hidden lg:block ${show&& "!block" }`}
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={` ${
          show && "!min-w-[300px]"
        } min-w-[110px] lg:min-w-[300px] bg-lh-main h-screen px-5 lg:px-8 py-14 overflow-y-auto transition-all duration-300 hidden md:block fixed`}
      >
        <Image
          className={`hidden lg:block ${show && "!block"}`}
          width={200}
          src={logoWhite}
          alt="logo"
        />
        <Image
          width={60}
          className={`lg:hidden ${show && "!hidden"}`}
          src={logoShort}
          alt="logo"
        />

        <div className=" space-y-[61px] mt-12 px-5 transition-all duration-300">
          <button
            onClick={() => setShow(!show)}
            className="hidden md:block lg:hidden"
          >
            <HamburgerIcon className="fill-white w-6" />
          </button>

          <hr className="border-[1px] rounded-full lg:hidden w-7" />

          <NavLink href={"/"}>
            <HomeIcon />{" "}
            <span className={`hidden lg:block ${show && "!block"}`}>Home</span>
          </NavLink>
          <NavLink href={"/dashboard"}>
            <DashIcon />{" "}
            <span className={`hidden lg:block ${show && "!block"}`}>
              Dashboard
            </span>
          </NavLink>
          <NavLink href={"/dashboard/properties"}>
            <PropertyIcon />
            <span className={`hidden lg:block ${show && "!block"}`}>
              My Properties
            </span>
          </NavLink>
          <NavLink href={"/logout"}>
            <LogoutIcon />{" "}
            <span className={`hidden lg:block ${show && "!block"}`}>
              Log Out
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Aside;
