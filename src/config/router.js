import {   createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from "../views/Login/Login";
import Register from "../views/Signup/signup";
import Mainscreen from "../views/Mainscreen/mainscrn";
import Sellpage from "../views/sellpage/sellpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
      },

    {
        path: "/register",
        element: <Register/>,
      },
    {
      path: "/login",
      element: <Login/>,
    }, 
      {
        path: "/main-screen",
        element: <Mainscreen/>,
      },
      {
        path: "/sellpage",
        element: <Sellpage/>,
      }
  ]);
function Router(){

 return <RouterProvider router={router} />
  
}

export default Router;