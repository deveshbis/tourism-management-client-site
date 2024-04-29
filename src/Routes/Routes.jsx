
import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../component/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import ViewDetails from "../pages/ViewDetails";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyListCardUpdate from "../pages/MyListCardUpdate";
import AllTouristSpotViewDtails from "../pages/AllTouristSpotViewDtails";
import AddCountry from "../pages/AddCountry";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tourism-management-server-site.vercel.app/touristSpot'),
      },
  
      {
        path: '/touristSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://tourism-management-server-site.vercel.app/userData'),
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>,
      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>,
        loader: () => fetch('https://tourism-management-server-site.vercel.app/userData'),
      },
      {
        path: '/myListCardUpdate/:id',
        element: <PrivateRoute>
          <MyListCardUpdate></MyListCardUpdate>
        </PrivateRoute>,

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },

      {
        path: '/viewDtails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
      },
      {
        path: '/allTouristSpotViewDetails/:id',
        element: <PrivateRoute>
          <AllTouristSpotViewDtails></AllTouristSpotViewDtails>
        </PrivateRoute>,
      },










      {
        path: '/addCountry',
        element: <AddCountry></AddCountry>,
      },


    ]
  },
]);

export default router;