import { blackLogo, heroImage } from "../../utilities/variables";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section distressed" id="hero">
      <div>
        <img src={blackLogo} alt="logo" className="hero-logo" />
      </div>
      <div>
        <img className="hero-image" src={heroImage} alt="hero image" />
      </div>
      <div className="hero-slogan-container">
        <h4 className="hero-slogan"> Crafting Journeys.</h4>
        <h4 className="hero-slogan">
          <Link to={"footwear/all"} className="hero-link">
            Shop Here
            <div className="hero-arrow-icon">
              <MdArrowForward />
            </div>
          </Link>
        </h4>
      </div>
    </section>
  );
};
