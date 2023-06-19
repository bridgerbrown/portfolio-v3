import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const linkCss: string = `text-md uppercase cursor-pointer font-extralight hover:opacity-100 opacity-60 transition-opacity`;
  const navCss: string = `space-x-6 flex list-none`;
  
  const router = useRouter();
  
  return (
    <nav className="text-white w-full justify-end flex">
      <ul className={navCss}>
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