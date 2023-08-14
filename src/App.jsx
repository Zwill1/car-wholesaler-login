import './App.css'
// import CloseIcon from '@mui/icons-material/Close';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from './pages/Login';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // loader: rootLoader,
    children: [
      // {
      //   path: "team",
      //   element: <Team />,
      //   loader: teamLoader,
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <CloseIcon /> */}
    </>
  )
}

export default App
