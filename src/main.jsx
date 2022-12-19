import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./components/Contact";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
        element: <Root />,
            errorElement: <ErrorPage />,
  },
   {
    path: "/contact",
        element: <Contact />,
  },
   {
    path: "/about",
        element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
