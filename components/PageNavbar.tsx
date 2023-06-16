import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function PageNavbar() {
  const linkCss: string = `text-lg uppercase hover:text-neonYellow font-extralight cursor-pointer `;
  const navCss: string = `space-x-4 flex list-none `;
  
  const router = useRouter();
  
  return (
    <nav className="mb-1.5 text-white justify-end flex">
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

export default PageNavbar;
