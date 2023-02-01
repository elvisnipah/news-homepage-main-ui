import React from "react";
import menuIcon from "../images/icon-menu.svg";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="grid grid-cols-2 px-4 py-8 gap-4 items-center justify-between">
      <img src={logo} alt="" className="w-12" />
      <img
        src={menuIcon}
        alt=""
        className="justify-self-end cursor-pointer w-12"
      />
    </header>
  );
}

export default Header;
