import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayOut/MasterLayout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home'
import AboutPage from '../AboutPage/AboutPage'
import OurTeamPage from '../OurTeam/OurTeamPage';
import FAQ from '../FAQ/FAQ';
import Booking from '../Booking/Booking';
import PageServices from '../PageServices/PageServices';
import BlogPage from '../Blog/BlogPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactUs from '../ContactUs/ContactUs';



function App() {

  let routes = createBrowserRouter([
    {path:"/",element:<MasterLayout />    , errorElement:<NotFound /> , children:[
      { index:true, element:    <Home /> },
      { path:"home", element:    <Home /> },
      {path:"about", element: <AboutPage />},
      {path:"ourTeam", element: <OurTeamPage />},
      {path:"FAQ", element: <FAQ/> },
      {path:"Booking", element: <Booking/> },
      {path:"PageServices", element: <PageServices/> },
      {path:"Login", element: <Login/> },
      {path:"Blog", element: <BlogPage/> },
      {path:"Register", element: <Register/> },
      {path:"Forgot", element: <ForgotPassword/> },
      {path:"ServiceDetails", element: <ServiceDetails/> },
      {path:"BlogDetails", element: <BlogDetails/> },
      {path:"ContactUs", element: <ContactUs/> },

      ] 
    }
  ] 
)
  
  
  return (
     
    <>
    <RouterProvider    router={routes}  />
    </>
  );
}

export default App;
