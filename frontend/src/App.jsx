
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Work from "./components/work-with-us/Work";
import Work2 from "./components/work-with-us-2/Work2";
import Card from "./components/carddetails/Card";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminReport from "./components/admin/report/AdminReport";
import AdminMantraOfTheMonth from "./components/admin/mantra-of-the-month/AdminMantraOfTheMonth";
import AdminGallery from "./components/admin/pages/gallery/AdminGallery";
import AdminEvents from "./components/admin/pages/events/AdminEvents";
import AdminContactus from "./components/admin/pages/contact-us/AdminContactus";
import AdminHome from "./components/admin/pages/home/AdminHome";
import AdminWorkWithUs from "./components/admin/pages/work-with-us/AdminWorkWithUs";
import AdminWorkWithUs1 from "./components/admin/pages/work-with-us-1/AdminWorkWithUs1";

function App() {
  const router = new createBrowserRouter([
    {
      path: "/",
      element: <><Homepage /></>
    },
    {
      path: "/about-us",
      element: <><Aboutus /></>
    },
    {
      path: "/gallery",
      element: <><Gallery /></>
    },
    {
      path: "/contact-us",
      element: <><Contact /></>
    },
    {
      path: "/work-with-us",
      element: <><Work /></>
    },
    {
      path: "/work-with-us-2",
      element: <><Work2 /></>
    },
    {
      path: "/donate-now",
      element: <><Card /></>
    },
    {
      path: "/admin",
      element: <><AdminDashboard /></>
    },
    {
      path: "/dashboard",
      element: <><AdminDashboard /></>
    },
    {
      path: "/mantra-of-the-month",
      element: <><AdminMantraOfTheMonth /></>
    },
    {
      path: "/report",
      element: <><AdminReport /></>
    }, {
      path: "/admin-pages-home",
      element: <><AdminHome /></>
    },
    {
      path: "/admin-gallery",
      element: <><AdminGallery /></>
    }, {
      path: "/admin-events",
      element: <><AdminEvents /></>
    }, {
      path: "/admin-contact-us",
      element: <><AdminContactus /></>
    },
    {
      path: "/admin-work-with-us",
      element: <><AdminWorkWithUs /></>
    }, {
      path: "/admin-our-governance",
      element: <><AdminWorkWithUs1 /></>
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
