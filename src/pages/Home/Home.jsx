import { Collection } from "../../components/Collection/Collection";
import { AboutShoes } from "../../components/AboutShoes/AboutShoes";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Hero } from "../../components/Hero/Hero";

import "./Home.css";

export const Home = () => {
  return (
    <section className="home-section">
      <Hero />
      <Collection />
      <AboutShoes />
      <AboutUs/>
    </section>
  );
};
