import { aboutShoesImage } from "../../utilities/variables";
import { PiPlusBold } from "react-icons/pi";

import "./AboutShoes.css";

export const AboutShoes = () => {
  return (
    <section className="about-shoes-section">
      <div className="about-shoes-content">
        <div>
          <PiPlusBold className="about-shoes-plus" />
          <span className="about-shoes-title">comfortable</span>
          <div className="about-shoes-text">
            The apex® shoes are crafted with high-quality materials designed for
            ultimate comfort. the unique blend of fabrics ensures a soft and
            cushioned experience, making them perfect for all-day wear in any
            weather.
          </div>
        </div>
        <div>
          <PiPlusBold className="about-shoes-plus" />
          <span className="about-shoes-title">breathable</span>
          <div className="about-shoes-text">
            The innovative fabric used in the apex® shoes promotes airflow,
            keeping your feet cool and dry. this breathable design helps to
            prevent sweat and odor buildup, ensuring a fresh feeling throughout
            the day.
          </div>
        </div>
        <div>
          <PiPlusBold className="about-shoes-plus" />
          <span className="about-shoes-title">durable</span>
          <div className="about-shoes-text">
            The apex® shoes are built to last. the materials used are resistant
            to wear and tear, making them perfect for any adventure. the shoes
            are designed to withstand various weather conditions, from rain to
            shine, ensuring long-lasting durability.
          </div>
        </div>
        <div>
          <PiPlusBold className="about-shoes-plus" />
          <span className="about-shoes-title">eco-friendly</span>
          <div className="about-shoes-text">
            We prioritize sustainability in our production processes. the
            materials used in the apex® shoes are sourced responsibly, and our
            manufacturing practices aim to conserve resources and minimize
            waste. by choosing the apex®, you are supporting a brand committed
            to protecting the planet.
          </div>
        </div>
      </div>

      <div className="about-shoes-image">
        <img src={aboutShoesImage} alt="image" />
      </div>
    </section>
  );
};
