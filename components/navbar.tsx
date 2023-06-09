import React from "react";

function Navbar() {
  const dotCss: string = `px-0.5 text-black`
  return (
    <nav className="w-full justify-end flex">
      <ul className="space-x-4 flex list-none font-semibold text-3xl">
        <li>HOME</li>
        <li>WORK</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
