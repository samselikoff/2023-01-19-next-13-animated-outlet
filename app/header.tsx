"use client";

import { motion, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 1 }}>
      <header className="flex border-b">
        <div>
          <NavLink
            activeClassName="text-gray-900"
            inactiveClassName="text-gray-400 hover:text-gray-900"
            className="p-3 inline-block uppercase text-sm font-medium"
            href="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="text-gray-900"
            inactiveClassName="text-gray-400 hover:text-gray-900"
            className="p-3 inline-block uppercase text-sm font-medium"
            href="/about"
          >
            About
          </NavLink>
        </div>
      </header>
    </MotionConfig>
  );
}
