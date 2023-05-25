import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Auth/Login";

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
        path: `login`,
        element: <Login />
      }
    ],
  },
]);

export default router;
