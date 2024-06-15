import { FootwearLayout } from "./pages/Footwear/FootwearLayout/FootwearLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { DataProvider } from "./context/DataContext";
import { Footwear } from "./pages/Footwear/Footwear";
import {
  ALL_SHOES,
  TRAIL_SHOES,
  WATER_PROOF_SHOES,
} from "./utilities/variables";
import { Admin } from "./pages/Admin/Admin";
import { Main } from "./pages/Main/Main";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/footwear",
        element: <Footwear />,
        children: [
          { path: "all", element: <FootwearLayout text={ALL_SHOES} /> },
          { path: "trail", element: <FootwearLayout text={TRAIL_SHOES} /> },
          {
            path: "water-proof",
            element: <FootwearLayout text={WATER_PROOF_SHOES} />,
          },
        ],
      },
      { path: "/", element: <AboutUs /> },
      { path: "/admin", element: <Admin /> },
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
