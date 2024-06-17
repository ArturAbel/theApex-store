import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";
import { hamburger } from "../../utilities/variables";
import { HashLink } from "react-router-hash-link";
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = () => {
  const [footwear, setFootwear] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [selectLink, setSelectLink] = useState();

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
            <HashLink className="link" to={"/#hero"}>
              home
            </HashLink>
            <div className="footwear-links">
              <Link className="link" to={"/footwear/all"}>
                footwear
              </Link>

              {footwear ? (
                <LuMinus className="plus-icon" onClick={handleOpenFootwear} />
              ) : (
                <LuPlus className="plus-icon" onClick={handleOpenFootwear} />
              )}

              {footwear && (
                <div className="footwear-variations">
                  <Link className="sub-link" to={"/footwear/trail"}>
                    trail
                  </Link>
                  <Link className="sub-link" to={"/footwear/water-proof"}>
                    water proof
                  </Link>
                </div>
              )}
            </div>
            <HashLink to={"/#about"} className="link">
              about us
            </HashLink>
            <Link to={"admin"} className="link">
              admin
            </Link>
            <div className="navbar-socials">
              <FaWhatsapp className="navbar-social-icon" />
              <TiSocialTwitter className="navbar-social-icon" />
              <TiSocialFacebook className="navbar-social-icon" />
              <TiSocialInstagram className="navbar-social-icon" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
