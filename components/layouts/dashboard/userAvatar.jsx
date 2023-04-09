import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LogoutButton from "@/components/common/LogoutButton";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";
import avatar from "../../../public/Assets/images/avatar.png";

function UserAvatar() {
  const user = useSelector(selectUser);

  return (
    <div className="flex gap-2.5 items-center">
      {/* Login user dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <>
          <Menu.Button title="More Options">
            <Image
              className="w-12 h-12 rounded-full"
              width={200}
              height={200}
              src={user?.photoUrl ? user?.photoUrl : avatar}
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
            <Menu.Items className="absolute right-0 top-14 p-2 w-48 origin-top-right rounded-lg bg-white border shadow-lg ">
              <Menu.Item>
                <>
                  <h3 className="text-md font-semibold px-3">
                    {user?.displayName}
                  </h3>
                  <hr />
                </>
              </Menu.Item>
              <Menu.Item>
                <span className="block text-base px-4 py-2 my-2 rounded-md text-left hover:bg-red-200">
                  <LogoutButton />
                </span>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      </Menu>

      <div className="hidden 2xl:block">
        <h3 className="text-sm font-semibold">{user?.displayName}</h3>
      </div>
    </div>
  );
}

export default UserAvatar;
