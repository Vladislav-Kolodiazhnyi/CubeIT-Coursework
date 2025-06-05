import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Hero title={"У світі, що змінюється щосекунди, знання – твій головний інструмент"}/>
      <News />
      <Slider />
    </>
  );
}

export default Home;
