import About1 from "@/components/site/about";
import Footer from "@/components/site/footer";
import MainHero from "@/components/site/main-hero";
import MiniBlog from "@/components/site/miniblog";
import PoweredBY from "@/components/site/poweredBY";
import Pricing from "@/components/site/pricingSEct";
import Portfolio from "@/components/site/projects";
import Service from "@/components/site/serviceSect";
import Team from "@/components/site/team";
import React from "react";

export default function Home() {
  return (
    <div className="bg-background">
      <MainHero />
      <PoweredBY />
      <About1 />
      <MiniBlog />
      <Team />
      <Service />
      <Pricing />
      <Portfolio />
      <Footer />
    </div>
  );
}
