import { aboutUsImage } from "../../utilities/variables";

import "./AboutUsResponsive.css";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-image">
        <img src={aboutUsImage} alt="image" />
      </div>
      <div className="about-us-content ">
        <div>
          <span className="about-us-title">OUR STORY</span>
          <div className="about-us-text">
            Our mission at The Apex® is to empower you to explore the world with
            confidence and comfort. Whether you are hiking up a mountain,
            trekking through a forest, or navigating the urban jungle, our shoes
            are designed to support you every step of the way. We believe that
            the right footwear can transform your adventures, making every
            journey more enjoyable and memorable.
          </div>
        </div>
        <div>
          <span className="about-us-title">JOIN THE ADVENTURE</span>
          <div className="about-us-text">
            We invite you to join the Apex® community and share in our passion
            for exploration and discovery. Follow us on social media, sign up
            for our newsletter, and stay connected with the latest news, product
            launches, and adventure stories. Together, lets conquer new horizons
            and make every step an adventure.
          </div>
        </div>
      </div>
    </section>
  );
};
