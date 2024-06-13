import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import "./Main.css";

export const Main = () => {
  return (
    <section className="main-section">
      <Navbar />
      <Outlet />
    </section>
  );
};
