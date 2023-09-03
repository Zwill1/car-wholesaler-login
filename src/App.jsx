import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./pages/Dashboard";

import LoggedInLayout from "./admin/layout/LoggedInLayout";

const router = createBrowserRouter([
  {
    // Set the parent route with a layout component with root path
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        // Upon loading root path, use homepage component to render
        path: "/",
        element: <Homepage />,
      },
      {
        // Only render when login link is clicked on nav
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    // Used for logged in users.
    path: "/dashboard",
    element: <LoggedInLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        //Main landing page after log in
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
