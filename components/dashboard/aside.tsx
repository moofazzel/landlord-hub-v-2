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
import UserAvatar from "../../public/Assets/images/avatar.jpg";

function Aside() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={` ${
          show && "!min-w-[300px]"
        } w-[110px] lg:min-w-[300px] h-full bg-lh-main px-5 lg:px-8 py-14 overflow-y-auto transition-all duration-300 hidden md:block fixed z-50 mainShadow`}
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
          {/* Dashboard Show button */}
          <button
            onClick={() => setShow(!show)}
            className="hidden md:block lg:hidden"
          >
            <div className="flex gap-4">
              <HamburgerIcon className="fill-white w-6 inline" />{" "}
              <span
                className={`hidden lg:block text-white font-semibold ${
                  show && "!block"
                }`}
              >
                Hide Menu
              </span>
            </div>
          </button>

          <div className={` hidden w-40 ${show && "!block"}`}>
            <Image
              className="w-16 h-1/6 rounded-full mx-auto"
              src={UserAvatar}
              alt=""
            />

            <h1 className="text-xl text-white font-semibold text-center mt-3">
              Ummy Amrin
            </h1>
          </div>

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
