import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React, { lazy, Suspense, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/RestaurantDetail/Cart";
import PaymentSuccess from "./components/PaymentSuccess";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantDetail/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./hooks/UserContext";
import { Provider } from "react-redux";
//const Help = lazy(() => import("./components/Help")); // lazy used for use bundle

import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { appStore, persistor } from "./store/appStore"; // Import appStore and persistor


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    let data = {
      name: "",
    };
    setUserName(data.name);
  }, []); // Empty dependency array to run the effect only once

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
     
        <Header />
        <Outlet /> {/* Will be Body,About,contact.... come here */}
        <Footer />
      </div>
    </UserContext.Provider>
    </PersistGate>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
