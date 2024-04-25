
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./layout/Root";
import Home from "../Home";
import ErrorPage from "../ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;