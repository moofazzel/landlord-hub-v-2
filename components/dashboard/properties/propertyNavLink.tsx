import { navLinkProps } from "@/lib/types/types";
import Link from "next/link";
import { useRouter } from "next/router";

function PropertyNavLink({ href, children }: navLinkProps) {
  const router = useRouter();

  return (
    <Link
      className={`${
        router.pathname == href && "bg-lh-main"
      } text-[10px] sm:text-base bg-white font-medium rounded-[5px] px-2 sm:px-3 md:px-5 lg:px-5 xl:px-8 py-1.5 sm:py-2.5 md:py-4 border border-[#a6a6a6]`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default PropertyNavLink;
