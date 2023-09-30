"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ className, href, children }) => {
  const path = usePathname();
  return (
    <Link className={`${className} ${path===href&&"font-semibold"}`} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
