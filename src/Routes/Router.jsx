import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <p>About pahe </p>,
  },
]);
