import Header from "./components/Header";
import Body from "./components/Body";
import Modal from "./components/ui/Modal";

import { useState, useEffect } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [mobileView, setMobileView] = useState(null);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    if (windowSize < 1280) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="bg-[hsl(36,100%,99%)] grow font-inter xl:px-24 xl:py-12 grid max-w-[1280px]">
      <Header showSidebar={openSidebar} mobileView={mobileView} />
      {sidebarOpen && <Modal closeSidebar={closeSidebar} />}
      <Body mobileView={mobileView} />
    </div>
  );
}

export default App;
