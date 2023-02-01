import React from "react";
import closeImg from "../images/icon-menu-close.svg";

function NavMenu(props) {
  return (
    <div className="grid p-8 xl:p-0 xl:h-8 grid-rows-[1fr_5fr] bg-[hsl(36,100%,99%)] text-[hsl(236,13%,42%)]">
      <img
        src={closeImg}
        alt=""
        className="justify-self-end cursor-pointer xl:hidden"
        onClick={props.closeSidebar}
      />
      <div className="grid h-8 gap-6 xl:grid-cols-5 xl:gap-0">
        <a href="/" className="hover:text-[hsl(5,85%,63%)]">
          Home
        </a>
        <a href="/" className="hover:text-[hsl(5,85%,63%)]">
          New
        </a>
        <a href="/" className="hover:text-[hsl(5,85%,63%)]">
          Popular
        </a>
        <a href="/" className="hover:text-[hsl(5,85%,63%)]">
          Trending
        </a>
        <a href="/" className="hover:text-[hsl(5,85%,63%)]">
          Categories
        </a>
      </div>
    </div>
  );
}

export default NavMenu;
