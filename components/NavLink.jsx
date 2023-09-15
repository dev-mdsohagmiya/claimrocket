"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text, activeClasses, dClass }) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link className={`${isActive ? activeClasses : dClass}`} href={href}>
      {text}
    </Link>
  );
};

export default NavLink;
