import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/auth/Register";
import EmailVerify from "./pages/auth/EmailVerify";
import Login from "./pages/auth/Login";
import ForgotPass from "./pages/auth/ForgotPass";
import ResetPassUi from "./pages/auth/ResetPassUi";

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
  ]);
  return <RouterProvider router={router} />;
};

export default App;
