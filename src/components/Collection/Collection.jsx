import {
  collectionImage1,
  collectionImage2,
  collectionImage3,
} from "../../utilities/variables";
import { MdArrowForward } from "react-icons/md";

import "./Collection.css";

export const Collection = () => {
  return (
    <section className="collection-section">
      <div className="collection-text collection-text-left ">
        design for everyday life
      </div>
      <div className="collection-image-left">
        <a className="collection-link" href="#">
          trail shoes <MdArrowForward className="collection-arrow-icon" />
        </a>
        <img className="collection-image" src={collectionImage1} alt="image" />
      </div>
      <div className="collection-image-middle">
        <img className="collection-image" src={collectionImage2} alt="image" />
      </div>
      <div className="collection-image-right">
        <a className="collection-link" href="#">
          water proof <MdArrowForward className="collection-arrow-icon" />
        </a>
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
