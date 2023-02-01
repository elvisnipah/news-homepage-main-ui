import React from "react";
import gamingGrowthImg from "../images/image-gaming-growth.jpg";
import retroPCImg from "../images/image-retro-pcs.jpg";
import topLaptopImg from "../images/image-top-laptops.jpg";

function Articles() {
  return (
    <section className="grid gap-8 pb-12 xl:col-span-3 xl:grid-cols-3 xl:py-8">
      <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[2fr_3fr] items-center gap-x-4 group cursor-pointer max-h-[133px]">
        <img src={retroPCImg} alt="" className="row-span-3 h-32 xl:h-auto" />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">01</p>
        <p className="font-bold group-hover:text-[hsl(5,85%,63%)]">
          Reviving Retro PCs
        </p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
      <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[2fr_3fr] items-center gap-x-4 group cursor-pointer max-h-[133px]">
        <img src={topLaptopImg} alt="" className="row-span-3 h-32 xl:h-auto" />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">02</p>
        <p className="font-bold group-hover:text-[hsl(5,85%,63%)]">
          Top 10 Laptops of 2022
        </p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          Our best picks for various needs and budgets.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[2fr_3fr] items-center gap-x-4 group cursor-pointer max-h-[133px]">
        <img
          src={gamingGrowthImg}
          alt=""
          className="row-span-3 h-32 xl:h-auto"
        />
        <p className="text-2xl font-bold text-[hsl(233,8%,79%)]">03</p>
        <p className="font-bold group-hover:text-[hsl(5,85%,63%)]">
          The Growth of Gaming
        </p>
        <p className="text-[hsl(236,13%,42%)] text-sm">
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </section>
  );
}

export default Articles;
