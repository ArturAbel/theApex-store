import { Collection } from "../../components/Collection/Collection";
import { AboutShoes } from "../../components/AboutShoes/AboutShoes";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home-section">
      <Hero />
      <Collection />
      <AboutShoes />
      <AboutUs />
      <Footer />
    </div>
  );
};
