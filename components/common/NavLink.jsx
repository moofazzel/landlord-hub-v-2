
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <Link
      className="flex gap-5 items-center text-white relative group transition-all duration-300"
      href={href}
    >
      <span
        className={`bg-white h-[60px] w-[9px] rounded-[10px] absolute -left-[62px] group-hover:-left-[50px] transition-all duration-200 ${
          router.pathname == href && " !-left-[40px] lg:!-left-[50px]"
        }`}
      ></span>
      {children}
    </Link>
  );
}

export default NavLink;
