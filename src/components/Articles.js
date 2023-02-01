import React from "react";
import gamingGrowthImg from "../images/image-gaming-growth.jpg";
import retroPCImg from "../images/image-retro-pcs.jpg";
import topLaptopImg from "../images/image-top-laptops.jpg";

function Articles() {
  return (
    <section className="grid gap-8 pb-12">
      <div className="grid grid-cols-[1fr_2fr] items-center gap-1">
        <img src={retroPCImg} alt="" className="row-span-3 h-32" />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">01</p>
        <p className="font-bold">Reviving Retro PCs</p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
      <div className="grid grid-cols-[1fr_2fr] items-center gap-1">
        <img src={topLaptopImg} alt="" className="row-span-3 h-32" />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">02</p>
        <p className="font-bold">Top 10 Laptops of 2022</p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          Our best picks for various needs and budgets.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_2fr] items-center gap-1">
        <img src={gamingGrowthImg} alt="" className="row-span-3 h-32" />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">03</p>
        <p className="font-bold">The Growth of Gaming</p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </section>
  );
}

export default Articles;
