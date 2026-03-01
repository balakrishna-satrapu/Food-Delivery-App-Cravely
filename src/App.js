import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { LOGO_URL } from "./utlis/constants";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div id="app-container">
      <Header logo={LOGO_URL} />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <App />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
