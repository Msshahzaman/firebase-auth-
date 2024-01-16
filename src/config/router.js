import {   createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from "../views/Login/Login";
import Register from "../views/Signup/signup";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Register/>,
      },
    {
      path: "/login",
      element: <Login/>,
    }, {
        path: "/register",
        element: <Register/>,
      }
  ]);
function Router(){

 return <RouterProvider router={router} />
  
}

export default Router;