import { payingImages } from "../../utilities/variables";
import { MdArrowForward } from "react-icons/md";
import { PayImage } from "../PayImage/PayImage";
import { Link } from "react-router-dom";

import "./Footer.css";  

export const Footer = () => {
  return (
    <section className="footer distressed">
      <div className="footer-form-container">
        <form className="footer-form" action="submit">
          <h4 className="footer-form-title">
            follow the apex® for new arrivals
          </h4>
          <input
            className="footer-input"
            type="firstName"
            placeholder="First Name"
          />
          <input
            className="footer-input"
            type="lastName"
            placeholder="Last Name"
          />
          <input className="footer-input" type="email" placeholder="Email" />
          <Link className="footer-button" type="submit" to={"submit"}>
            Submit
          </Link>
        </form>
      </div>
      <div className="footer-details-container">
        <div className="footer-socials-links">
          <a href="#" className="footer-link">
            facebook
            <MdArrowForward className="footer-arrow" />
          </a>
          <a className="footer-link">
            instagram <MdArrowForward className="footer-arrow" />
          </a>
          <a className="footer-link">
            whatsApp <MdArrowForward className="footer-arrow" />
          </a>
        </div>
        <div className="footer-address">
          <p>
            <strong>The Apex® Headquarters </strong>
          </p>
          <p>
            48 Summit Drive Hiker Haven Industrial Estate Mountaineer, Zurich
            8050, Switzerland
          </p>
        </div>
        <p className="footer-rights">© 2024 The Apex®</p>
        <div className="footer-paying-options-container">
          {payingImages.map((image) => (
            <PayImage key={image} url={image} />
          ))}
        </div>
      </div>
    </section>
  );
};
