import React from "react";
import Link from "next/link";

function Navbar(props: any) {
  const dotCss: string = `px-0.5 text-black`;
  const linkCss: string = `uppercase cursor-pointer hover:opacity-80`;
  const regularNavCss: string = `space-x-4 flex list-none font-thin text-3xl`;
  const smallerNavCss: string = `space-x-4 flex list-none font-thin text-xl`;
  
  return (
    <nav className="w-full justify-end flex">
      <ul className={regularNavCss}>
        <Link href="/" className={linkCss}>
          Home 
        </Link>
        <Link href="/work" className={linkCss}>
          Work
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

export default Navbar;
