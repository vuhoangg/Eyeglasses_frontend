import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./features/Admin/AdminLayout/AdminLayout.jsx";
import AdminDashboard from './features/Admin/AdminDashboard/AdminDashboard.jsx';
import ErrorPage from './features/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
    errorElement: <ErrorPage/>,
    children: [
      // { index: true, element: <HomePage/> },
      {
        path: "about",
        element: <h1>list user</h1>
      },
    ]
  },
  // Layout Admin 
  {
    path: "/admin",
    element:  <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element:  <AdminDashboard/>  },
      {
        path: "list-user",
        element: <h1>list user</h1>
      },
    ]
  },
 ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)


 

