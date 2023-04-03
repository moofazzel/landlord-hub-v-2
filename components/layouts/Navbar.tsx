import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../public/Assets/icons/logo_blue.svg";

function Navbar() {
  return (
    <>
      <header className="bg-white navShadow py-2.5">
        <div className="container flex items-center justify-between">
          <Image src={logoBlue} alt="" />
          <nav className="space-x-12">
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
