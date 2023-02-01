import React from "react";
import Articles from "./Articles";
import Hero from "./Hero";
import News from "./News";

function Body() {
  return (
    <main className="px-4 grid gap-12">
      <Hero />
      <News />
      <Articles />
    </main>
  );
}

export default Body;
