import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeatureProducts from "./FeatureProducts";

function HomePage() {
  return (
    <div>
      <HeroSection
        title="Iphone 14 pro"
        subtitle="Experience the power of latest Iphone Cell"
        link="/"
        image={iphone}
      />

      <FeatureProducts />
      <HeroSection
        title="Build the ultimate Setup"
        subtitle="You can add Studio"
        link="/"
        image={mac}
      />
    </div>
  );
}

export default HomePage;
