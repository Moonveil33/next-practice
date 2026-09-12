import About from "@/components/templates/Index/About";
import Slider from "@/components/templates/Index/Slider";
import React from "react";
import Services from "@/components/templates/Index/Services";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
}

export default Home;
