"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href = "/",
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  ...rest
}) {
  let pathname = usePathname();
  let active = pathname === href;

  let classes = active
    ? `${className} ${activeClassName}`
    : `${className} ${inactiveClassName}`;

  return (
    <div>
      <Link className={classes} href={href} {...rest} />

      {/* {active && (
        <motion.div layoutId="underline" className="bg-gray-500 h-1 -mb-px" />
      )} */}
    </div>
  );
}
