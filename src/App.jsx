import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footwear } from "./pages/Footwear/Footwear";
import { Admin } from "./pages/Admin/Admin";
import { Main } from "./pages/Main/Main";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/footwear", element: <Footwear /> },
      { path: "/about-us" },
      // Add element
      { path: "/admin", element: <Admin /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
