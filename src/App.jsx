import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

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
