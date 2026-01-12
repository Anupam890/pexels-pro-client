import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/auth/Register";
import EmailVerify from "./pages/auth/EmailVerify";
import Login from "./pages/auth/Login";
import ForgotPass from "./pages/auth/ForgotPass";
import ResetPassUi from "./pages/auth/ResetPassUi";

// Dashboard Imports
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import GenerateImage from "./pages/dashboard/GenerateImage";
import ImageHistory from "./pages/dashboard/ImageHistory";
import RegenerateImage from './pages/dashboard/RegenerateImage';
import Credits from "./pages/dashboard/Credits";
import Settings from "./pages/dashboard/Settings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/verify-email",
      element: <EmailVerify />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPass />,
    },
    {
      path: "/reset-password",
      element: <ResetPassUi />,
    },
    {
      path: "/generate",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <GenerateImage />,
        },
        {
          path: "history",
          element: <ImageHistory />,
        },
        {
          path: "regenerate",
          element: <RegenerateImage />,
        },
        {
          path: "credits",
          element: <Credits />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
