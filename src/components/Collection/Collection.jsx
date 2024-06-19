import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  collectionImage1,
  collectionImage2,
  collectionImage3,
} from "../../utilities/variables";

import "./Collection.css";

export const Collection = () => {
  return (
    <section className="collection-section">
      <div className="collection-text collection-text-left ">
        design for everyday life
      </div>
      <div className="collection-image-left">
        <Link to={"footwear/trail"} className="collection-link">
          trail shoes <MdArrowForward className="collection-arrow-icon" />
        </Link>
        <img className="collection-image" src={collectionImage1} alt="image" />
      </div>
      <div className="collection-image-middle">
        <Link to={"footwear/all"} className="collection-link">
          collection <MdArrowForward className="collection-arrow-icon" />
        </Link>
        <img className="collection-image" src={collectionImage2} alt="image" />
      </div>
      <div className="collection-image-right">
        <Link to={"footwear/water-proof"} className="collection-link">
          water proof <MdArrowForward className="collection-arrow-icon" />
        </Link>
        <img className="collection-image" src={collectionImage3} alt="image" />
      </div>
      <div
        className="
 collection-text collection-text-right"
      >
        ready for any adventure, in any weather
      </div>
    </section>
  );
};
