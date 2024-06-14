import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import "./Main.css";




export const Main = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <Outlet />
      </section>
    </>
  );
};
