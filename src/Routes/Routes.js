import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import MoreAbout from "../pages/Home/More about/MoreAbout";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/moreabout',
                element: <MoreAbout></MoreAbout>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])