import React from "react";
import Herosection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import HeroBottom from "@/components/HeroBottom";
import SoHard from "@/components/SoHard";
import Footer from "@/components/Footer";
function HomePage() {
  return (
    <div>
      <NavBar />
      <Herosection />
      <HeroBottom />
      <SoHard />
      <Footer />
    </div>
  );
}

export default HomePage;
