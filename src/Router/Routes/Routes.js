import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServicesPage from "../../Pages/Shared/Services/ServicesPage";
import About from "../../Pages/About/About";



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
          path: '/services',
          element: <ServicesPage></ServicesPage>
        }
    ]
    }
  ])
export default router;