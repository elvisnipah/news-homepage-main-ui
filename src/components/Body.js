import React from "react";
import Articles from "./Articles";
import Hero from "./Hero";
import News from "./News";

function Body(props) {
  return (
    <main className="px-4 grid gap-12 xl:grid-cols-3 xl:gap-8">
      <Hero mobileView={props.mobileView} />
      <News />
      <Articles />
    </main>
  );
}

export default Body;
