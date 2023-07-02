import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function PageNavbar() {
  const activeLinkCss: string = `border-b border-white-1 opacity-100 text-md uppercase hover:opacity-100 transition-opacity font-extralight cursor-pointer `;
  const linkCss: string = `border-white-1 text-md uppercase hover:opacity-100 opacity-60 transition-opacity font-extralight cursor-pointer `;
  const navCss: string = `space-x-4 flex list-none`;
  const router = useRouter();
  
  return (
    <nav className="mb-1.5 text-white justify-end flex">
      <ul className={navCss}>
        <Link href="/" 
          className={linkCss}
        >
          Home 
        </Link>
        <Link href="/projects" className={router.pathname === `/projects` ? activeLinkCss : linkCss}>
          Projects 
        </Link>
        <Link href="/about" className={router.pathname === `/about` ? activeLinkCss : linkCss}>
          About 
        </Link>
        <Link href="/contact" className={router.pathname === `/contact` ? activeLinkCss : linkCss}>
          Contact 
        </Link>
      </ul>
    </nav>
  );
}

export default PageNavbar;
