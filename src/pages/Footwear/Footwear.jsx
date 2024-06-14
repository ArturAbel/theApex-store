import { blackLogo, favoriteImage, cartImage } from "../../utilities/variables";

import "./Footwear.css";

export const Footwear = () => {
  return (
    <section className="footwear-section">
      <div className="footwear-header">
        <div className="footwear-header-left"></div>
        <div className="footwear-header-middle">
          <img className="footwear-logo" src={blackLogo} alt="logo" />
          <h3 className="footwear-title">catalog</h3>
        </div>
        <div className="footwear-header-right">
          <div className="footwear-icons">
            <img className="footwear-icon" src={favoriteImage} alt="favorite"/>
            <img className="footwear-icon" src={cartImage} alt="cart"/>
          </div>
        </div>
      </div>
      <div className="footwear-main"></div>
    </section>
  );
};
