import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../public/Assets/icons/logo_blue.svg";
import HamburgerIcon from "../icons/HamburgerIcon";
import MobileSideNav from "./main/mobileSideNav";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import LogoutButton from "../common/LogoutButton";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";
import avatar from "../../public/Assets/images/avatar.png";

function Navbar() {
  // mobile menu icon
  const [show, setShow] = useState(false);

  const user = useSelector(selectUser);

  console.log(user);

  return (
    <>
      <header className="bg-white navShadow py-2.5 z-50 relative">
        <div className="lg:container px-5 lg:px-0 flex items-center justify-between">
          <Link href={"/"}>
            <button className="md:hidden" onClick={() => setShow(!show)}>
              <HamburgerIcon className="" />
            </button>
            <Image
              className="mx-auto md:mx-0 w-[180px] md:w-[200px] "
              src={logoBlue}
              alt=""
            />
          </Link>
          <nav className="space-x-12 hidden md:block">
            {user ? (
              <>
                <Menu as="div" className="relative inline-block text-left">
                  <>
                    <Menu.Button title="More Options">
                      <Image
                        className="w-12 h-12 rounded-full"
                        width={200}
                        height={200}
                        src={user.photoUrl ? user.photoUrl : avatar}
                        alt="Picture of the author"
                        priority
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-50"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-50"
                    >
                      <Menu.Items className="absolute right-0 top-14 p-2 w-44 origin-top-right rounded-lg bg-white border shadow-lg ">
                        <>
                          <h3 className="text-md font-semibold px-3">
                            {user?.displayName}
                          </h3>
                          {/* <hr /> */}
                        </>
                        <Menu.Item>
                          <Link
                            href="/dashboard/userprofile"
                            className="w-full block text-base px-4 py-2 rounded-md text-left hover:bgGradient hover:text-white mt-1"
                          >
                            Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            href="/dashboard"
                            className="w-full block text-base px-4 py-2 rounded-md text-left hover:bgGradient hover:text-white mt-1"
                          >
                            Dashboard
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <span className="block text-base px-4 py-2 rounded-md text-left hover:bg-red-200">
                            <LogoutButton />
                          </span>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                </Menu>
              </>
            ) : (
              <Link
                className="bgGradient text-white px-11 py-4 rounded-md hover:bgGradientHover"
                href={"/login"}
              >
                Login
              </Link>
            )}
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
