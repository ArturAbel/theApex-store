import { FootwearLayout } from "./pages/Footwear/FootwearLayout/FootwearLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FooterForm } from "./components/FooterForm/FooterForm";
import { NotFound } from "./components/NotFound/NotFound";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { DataProvider } from "./context/DataContext";
import { Footwear } from "./pages/Footwear/Footwear";
import { Admin } from "./pages/Admin/Admin";
import { Shoe } from "./pages/Shoe/Shoe";
import { Main } from "./pages/Main/Main";
import { Home } from "./pages/Home/Home";
import {
  WATER_PROOF_SHOES,
  TRAIL_SHOES,
  ALL_SHOES,
} from "./utilities/variables";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "footwear",
        element: <Footwear />,
        children: [
          {
            path: "all",
            element: <FootwearLayout text={ALL_SHOES} />,
          },
          { path: "all/:id", element: <Shoe /> },
          { path: "trail", element: <FootwearLayout text={TRAIL_SHOES} /> },
          { path: "trail/:id", element: <Shoe /> },

          {
            path: "water-proof",
            element: <FootwearLayout text={WATER_PROOF_SHOES} />,
          },
          { path: "water-proof/:id", element: <Shoe /> },
        ],
      },
      { path: "/", element: <AboutUs /> },
      { path: "admin", element: <Admin /> },
      { path: "submit", element: <FooterForm /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />;
    </DataProvider>
  );
}

export default App;
