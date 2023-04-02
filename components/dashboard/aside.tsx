import Image from "next/image";
import NavLink from "../common/NavLink";
import logoWhite from "../../public/Assets/images/logo_white.svg";
import HomeIcon from "../icons/HomeIcon";
import DashIcon from "../icons/DashIcon";
import PropertyIcon from "../icons/PropertyIcon";
import LogoutIcon from "../icons/LogoutIcon";

function Aside() {
  return (
    <>
      <Image src={logoWhite} alt="logo" />

      <NavLink href={"/"}>
        <HomeIcon /> Home
      </NavLink>
      <NavLink href={"/dashboard"}>
        <DashIcon /> Dashboard
      </NavLink>
      <NavLink href={"/dashboard/properties"}>
        <PropertyIcon /> My Properties
      </NavLink>
      <NavLink href={"/logout"}>
        <LogoutIcon /> Log Out
      </NavLink>
    </>
  );
}

export default Aside;
