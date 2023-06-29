import React from "react";
import Link from "next/link";
import { useRouter, pathname } from "next/router";

function Navbar() {
  const activeLinkCss: string = `opacity-100 text-md uppercase transition-opacity font-extralight cursor-pointer `;
  const linkCss: string = `text-md uppercase cursor-pointer font-extralight hover:opacity-100 opacity-60 transition-opacity`;
  const navCss: string = `space-x-4 flex list-none`;
  
  const router = useRouter();
  
  return (
    <nav className="text-white w-full justify-end flex">
      <ul className={navCss}>
        <Link href="/" 
          className={linkCss}
        >
          Home 
        </Link>
        <Link href="/work" className={router.pathname === `/work` ? activeLinkCss : linkCss}>
          Work
        </Link>
        <Link href="/work" className={router.pathname === `/blog` ? activeLinkCss : linkCss}>
          Blog
        </Link>
        <Link href="/about" className={router.pathname === `/about` ? activeLinkCss : linkCss}>
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
