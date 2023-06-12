import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const linkCss: string = `cursor-pointer hover:opacity-80`;
  const regularNavCss: string = `space-x-4 flex list-none font-thin text-2xl tracking-wider`;
  const smallerNavCss: string = `space-x-4 flex list-none font-thin text-xl`;
  
  const router = useRouter();
  
  return (
    <nav className="text-white w-full justify-end flex">
      <ul className={router.pathname === "/" ? regularNavCss : smallerNavCss }>
        <Link href="/" 
          className={linkCss}
        >
          Home 
        </Link>
        <Link href="/work" className={linkCss}>
          Work
        </Link>
        <Link href="/work" className={linkCss}>
          Blog
        </Link>
        <Link href="/about" className={linkCss}>
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
