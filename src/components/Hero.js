import React from "react";
import web3Mobile from "../images/image-web-3-mobile.jpg";
import web3MDesktop from "../images/image-web-3-desktop.jpg";

function Hero() {
  return (
    <section className="grid gap-5">
      <img src={web3Mobile} alt="" />
      <p className="font-bold text-4xl text-left">
        The Bright Future of Web 3.0?
      </p>
      <p className="text-[hsl(236,13%,42%)]">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="text-center w-[150px] tracking-widest p-3 text-[hsl(36,100%,99%)] bg-[hsl(5,85%,63%)] font-bold">
        READ MORE
      </button>
    </section>
  );
}

export default Hero;
