import React from "react";
import Link from "next/link";

function HomeNavbar() {
  const linkCss: string = `py-2 text-sm sm:text-base uppercase cursor-pointer font-extralight hover:opacity-100 opacity-60 transition-opacity`;
  const navCss: string = `space-x-4 flex list-none`;
  
  return (
    <nav className="text-white w-full justify-end flex">
      <ul className={navCss}>
        <Link href="/" 
          className={linkCss}
        >
          Home 
        </Link>
        <Link href="/projects" className={linkCss}>
          Projects  
        </Link>
        <Link href="/about" className={linkCss}>
          About
        </Link>
        <Link href="/contact" className={linkCss}>
          Contact 
        </Link>
      </ul>
    </nav>
  );
}

export default HomeNavbar;
