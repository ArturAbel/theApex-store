import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

import "./FooterForm.css";

export const FooterForm = () => {
  return (
    <section className="footer-form-section distressed">
      <div className="footer-form-form-container">
        <h4 className="footer-form-form-title">
          Thank you, We will keep you posted!
        </h4>
      </div>
      <div className="footer-form-socials-links">
        <TiSocialFacebook className="footer-form-social" />
        <TiSocialInstagram className="footer-form-social" />
        <FaWhatsapp className="footer-form-social" />
      </div>
      <div className="footer-form-rights">© 2024 The Apex®</div>
    </section>
  );
};
