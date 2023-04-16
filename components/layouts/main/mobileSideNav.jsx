import Image from "next/image";
import logoWhite from "../../../public/Assets/images/logo_white.svg";
import NavLink from "@/components/common/NavLink";
import HomeIcon from "@/components/icons/HomeIcon";
import DashIcon from "@/components/icons/DashIcon";
import PropertyIcon from "@/components/icons/PropertyIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import CloseIcon from "@/components/icons/CloseIcon";

import avatar from "../../../public/Assets/images/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";

function MobileSideNav({ show, setShow }) {
  const user = useSelector(selectUser);
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
            height={200}
            src={logoWhite}
            alt="logo"
            priority
          />
        </div>

        <div className="flex flex-col items-start gap-[61px] mt-12 px-5 transition-all duration-300">
          {/* Dashboard Show button */}

          <div>
            <Image
              className="w-16 h-1/6 rounded-full mx-auto"
              width={200}
              height={200}
              src={user?.photoUrl ? user.photoUrl : avatar}
              alt=""
            />

            <h1 className="text-xl text-white font-semibold text-center mt-3">
              {user?.displayName}
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
