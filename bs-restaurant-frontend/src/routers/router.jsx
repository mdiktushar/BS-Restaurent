import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/menu`,
        element: <Menu />,
      },
      {
        path: `/order`,
        element: <Order />,
      },
      {
        path: `/login`,
        element: <Login />
      },
      {
        path: `/signup`,
        element: <SignUp />
      }
    ],
  },
]);

export default router;
