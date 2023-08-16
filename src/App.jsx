import './App.css'
// import CloseIcon from '@mui/icons-material/Close';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from './styles/GlobalStyles';

import Homepage from './pages/Homepage';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
    children: [
    {
      path: "login",
      element: <Login />,
    }
    ],

  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      {/* <CloseIcon /> */}
    </>
  )
}

export default App
