import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home/Home";
import NewsDetails from "../Layout/Home/NewsDetails";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path: "/news/:id",
            element: <PrivateRoute><NewsDetails /></PrivateRoute>,
            loader: () => fetch("/news.json")
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]
}])
export default routes