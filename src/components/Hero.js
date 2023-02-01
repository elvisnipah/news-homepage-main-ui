import React from "react";
import web3Mobile from "../images/image-web-3-mobile.jpg";
import web3MDesktop from "../images/image-web-3-desktop.jpg";

function Hero(props) {
  return (
    <section className="grid gap-5 xl:grid-cols-2 xl:col-span-2">
      {props.mobileView ? (
        <img src={web3Mobile} alt="" />
      ) : (
        <img src={web3MDesktop} alt="" className="xl:col-span-2" />
      )}
      <div className="">
        <p className="font-bold text-5xl text-left xl:w-[300px]">
          The Bright Future of Web 3.0?
        </p>
      </div>
      <div className="grid">
        <p className="text-[hsl(236,13%,42%)] text-sm xl:pb-4">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="text-center w-[150px] tracking-widest p-3 text-[hsl(36,100%,99%)] bg-[hsl(5,85%,63%)] hover:bg-[hsl(240,100%,5%)] font-bold">
          READ MORE
        </button>
      </div>
    </section>
  );
}

export default Hero;
