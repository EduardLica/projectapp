import React from "react";
import HeroBanner from "../Containers/HeroBanner";
import DespreContainer from "../Containers/DespreContainer";
import RandomProducts from "../Containers/RandomProducts";

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <DespreContainer />
      <RandomProducts />
    </div>
  );
}

export default HomePage;
