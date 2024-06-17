import { blackLogo } from "../../utilities/variables";
import "./Loader.css";

export const Loader = () => {
  return (
    <>
      <div className="loader">
        <h2 className="loader-title">Loading...</h2>
        <img className="loader-logo" src={blackLogo} alt="loader" />
      </div>
    </>
  );
};
