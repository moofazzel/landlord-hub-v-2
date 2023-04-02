import { navLinkProps } from "@/lib/types/types";
import Link from "next/link";
import { Children } from "react";

function NavLink({ href, children }: navLinkProps) {
  return <Link href={href}>{children}</Link>;
}

export default NavLink;
