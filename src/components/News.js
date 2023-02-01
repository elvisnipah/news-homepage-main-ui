import React from "react";

function News() {
  return (
    <section className="grid bg-[hsl(240,100%,5%)] text-[hsl(233,8%,79%)] p-4">
      <p className="text-[hsl(35,77%,62%)] text-3xl font-bold">New</p>
      <div className="py-2 pb-8">
        <p className="font-bold py-2 text-xl">Hydrogen VS Electric Cars</p>
        <p className="text-sm">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr />
      <div className="py-2 pb-8">
        <p className="font-bold py-2 text-xl">The Downsides of AI Artistry</p>
        <p className="text-sm">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div className="py-2 pb-4">
        <p className="font-bold py-2 text-xl">Is VC Funding Drying Up?</p>
        <p className="text-sm">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}

export default News;
