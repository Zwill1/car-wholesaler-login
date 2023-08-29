import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
    children: [
      {
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
      <p>ff</p>
    </>
  );
}

export default App;
