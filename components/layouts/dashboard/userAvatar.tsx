import Image from "next/image";

import userAvatar from "../../../public/Assets/images/avatar.jpg";

function UserAvatar() {
  return (
    <div className="flex gap-2.5 items-center">
      <Image className="w-16 h-1/6 rounded-full" src={userAvatar} alt="" />

      <div className="hidden 2xl:block">
        <h1 className="text-sm font-semibold">Ummy Amrin</h1>
        <span className="text-[13px]">Gulsan, Dhaka</span>
      </div>
    </div>
  );
}

export default UserAvatar;
