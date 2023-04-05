import Image from "next/image";
import logoWhite from "../../../public/Assets/images/logo_white.svg";
import logoShort from "../../../public/Assets/images/logoShort.svg";
import { useState } from "react";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import NavLink from "@/components/common/NavLink";
import HomeIcon from "@/components/icons/HomeIcon";
import DashIcon from "@/components/icons/DashIcon";
import PropertyIcon from "@/components/icons/PropertyIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import CloseIcon from "@/components/icons/CloseIcon";

function MobileSideNav({ show, setShow }: any) {
  return (
    <>
      <div
        className={` ${
          show && "!ml-0"
        } -ml-[100%] w-[75%] sm:w-[45%] h-full bg-lh-main px-5 lg:px-8 py-14 overflow-y-auto transition-all duration-300 fixed top-0 z-50 mainShadow`}
      >
        <div className="flex gap-5">
          <button onClick={() => setShow(!show)} className="">
            <CloseIcon />
          </button>
          <Image
            className={`w-[170px] sm:w-[220px] ${show && "!block"}`}
            width={200}
            src={logoWhite}
            alt="logo"
          />
        </div>

        <div className=" space-y-[61px] mt-12 px-5 transition-all duration-300">
          {/* Dashboard Show button */}

          <div className="w-40">
            <img
              className="w-16 h-1/6 rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 className="text-xl text-white font-semibold text-center mt-3">
              Ummy Amrin
            </h1>
          </div>

          <NavLink href={"/"}>
            <HomeIcon /> <span className={` ${show && "!block"}`}>Home</span>
          </NavLink>
          <NavLink href={"/dashboard"}>
            <DashIcon />{" "}
            <span className={` ${show && "!block"}`}>Dashboard</span>
          </NavLink>
          <NavLink href={"/dashboard/properties"}>
            <PropertyIcon />
            <span className={` ${show && "!block"}`}>My Properties</span>
          </NavLink>
          <NavLink href={"/logout"}>
            <LogoutIcon />{" "}
            <span className={` ${show && "!block"}`}>Log Out</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileSideNav;
