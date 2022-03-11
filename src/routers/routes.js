import React from "react";

// Layouts
import AuthLayout from "../layouts/Auth";
import DashboardLayout from "../layouts/Dashboard";

// Auth components
import SignIn from "../auth/SignIn";
import ResetPassword from "../auth/ResetPassword";
import Page404 from "../auth/Page404";
import Page500 from "../auth/Page500";

// Page components
import DashboardPage from "../pages/dashboard";

// Routes.
const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "",

    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
