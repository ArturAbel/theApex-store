import { blackLogo, heroImage } from "../../utilities/variables";
import { MdArrowForward } from "react-icons/md";

import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section distressed">
      <div>
        <img src={blackLogo} alt="logo" className="hero-logo" />
      </div>
      <div>
        <img className="hero-image" src={heroImage} alt="hero image" />
      </div>
      <div>
        <h4 className="hero-slogan">Reach the Apex </h4>
        <h4 className="hero-slogan">
          of Comfort
          <a href="#" className="hero-link">
            shop here
            <div className="hero-arrow-icon">
              <MdArrowForward />
            </div>
          </a>
        </h4>
      </div>
    </section>
  );
};
