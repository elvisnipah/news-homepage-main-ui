import React from "react";
import NavMenu from "../NavMenu";
import ReactDOM from "react-dom";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="h-full w-full grid grid-cols-[1fr_3fr] fixed z-1 left-0 top-0">
          <div className="bg-[rgba(0,0,0,0.5)]"></div>
          <NavMenu closeSidebar={props.closeSidebar} />
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modal;
