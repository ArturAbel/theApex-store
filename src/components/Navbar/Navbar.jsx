import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { hamburger } from "../../utilities/variables";
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [footwear, setFootwear] = useState(false);

  const handleOpenNavbar = () => {
    setNavbar(true);
  };

  const handleCloseNavbar = () => {
    setNavbar(false);
  };

  const handleOpenFootwear = () => {
    setFootwear((previous) => !previous);
  };

  return (
    <nav className="distressed">
      <img
        onMouseEnter={handleOpenNavbar}
        className="hamburger-container"
        src={hamburger}
        alt="hamburger"
      />
      {navbar && (
        <div className="navbar-container" onMouseLeave={handleCloseNavbar}>
          <div className="navbar-links">
            <h3 className="navbar-logo">The Apex®</h3>
            <Link className="link" to={"/"}>
              home
            </Link>
            <div className="footwear-links">
              <Link className="link" to={"/footwear"}>
                footwear
              </Link>

              {footwear ? (
                <LuMinus className="plus-icon" onClick={handleOpenFootwear} />
              ) : (
                <LuPlus className="plus-icon" onClick={handleOpenFootwear} />
              )}

              {footwear && (
                <div className="footwear-variations">
                  <Link className="sub-link">trail </Link>
                  <Link className="sub-link">water proof</Link>
                </div>
              )}
            </div>
            <Link className="link">about us</Link>
            <Link className="link">admin</Link>
            <div className="navbar-socials">
              <FaWhatsapp className="navbar-social-icon" />
              <TiSocialTwitter className="navbar-social-icon" />
              <TiSocialFacebook className="navbar-social-icon" />
              <TiSocialLinkedin className="navbar-social-icon" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
