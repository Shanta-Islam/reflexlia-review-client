import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServicesPage from "../../Pages/Shared/Services/ServicesPage";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import MyReview from "../../Pages/MyReviews/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Profile/Profile";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import Notfound from "../../Pages/NotFound/NotFound";
import AddServices from "../../Pages/AddServices/AddServices";



const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home datasize={3}></Home>
        },
        {
          path: '/home',
          element: <Home datasize={3}></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>
        },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: "/my-reviews",
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: "/resetpassword",
          element: <PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
        },
        {
          path: "/addservices",
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: "*",
          element: <Notfound></Notfound>
        },
      ]
    }
  ])
export default router;