
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/touristSpot'),
      },
      {
        path: '/touristSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: '/addTouristSpot',
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/myList',
        element: <MyList></MyList>,
        loader: () => fetch('http://localhost:5000/userData'),
      },
      {
        path: '/myListCardUpdate/:id',
        element: <MyListCardUpdate></MyListCardUpdate>,
        loader: ({params}) => fetch(`http://localhost:5000/userData/${params.id}`),
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
        // loader: () => fetch('http://localhost:5000/touristSpot'),
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        
      },


    ]
  },
]);

export default router;