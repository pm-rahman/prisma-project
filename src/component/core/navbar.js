import Link from "next/link";
import React from "react";
import ActiveLink from "./activeLink";

const Navbar = () => {
  return (
    <div className="border border-b">
      <div className="flex py-4 container justify-between">
        <Link href="/" className="font-semibold text-xl">Prisma</Link>
        <ul className="flex gap-5 text-slate-500">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/items">Items</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
