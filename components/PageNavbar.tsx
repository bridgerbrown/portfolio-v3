import React from "react";
import Link from "next/link";

function PageNavbar() {
  const linkCss: string = `tracking-wide border-white-1 sm:text-base uppercase hover:opacity-100 opacity-60 transition-opacity font-extralight cursor-pointer`;
  const navCss: string = `sm:space-x-4 space-x-8 flex list-none`;
  
  return (
    <nav className="py-1.5 lg:py-1 text-white justify-end flex">
      <div className={navCss}>
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
      </div>
    </nav>
  );
}

export default PageNavbar;
