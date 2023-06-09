import React from "react";

function Navbar() {
  const dotCss: string = `px-0.5 text-black`
  return (
    <nav className="w-full justify-end flex">
      <ul className="mr-8 flex list-none font-semibold text-4xl">
        <li>HOME</li>
        <li className={dotCss}>.</li>
        <li>WORK</li>
        <li className={dotCss}>.</li>
        <li>ABOUT</li>
        <li className={dotCss}>.</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
