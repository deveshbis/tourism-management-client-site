
import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../component/ErrorPage";
import TouristsSpot from "../pages/TouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../component/Login";
import SignUp from "../component/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/touristSpot',
        element: <TouristsSpot></TouristsSpot>,
      },
      {
        path: '/addTouristSpot',
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/myList',
        element: <MyList></MyList>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },

    ]
  },
]);

export default router;