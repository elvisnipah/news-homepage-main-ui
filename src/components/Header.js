import React from "react";
import menuIcon from "../images/icon-menu.svg";
import logo from "../images/logo.svg";

import NavMenu from "./NavMenu";

function Header(props) {
  return (
    <header className="grid grid-cols-[3fr_2fr] px-4 py-8 gap-4 items-center justify-between xl:max-h-24 xl:px-4 xl:py-0">
      <img src={logo} alt="" className="w-12" />
      <img
        src={menuIcon}
        alt=""
        className="justify-self-end cursor-pointer w-12 xl:hidden"
        onClick={props.showSidebar}
      />
      {!props.mobileView && <NavMenu mobileView={props.mobileView} />}
    </header>
  );
}

export default Header;
