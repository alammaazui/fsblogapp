import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path : "register",
        element : <Register/>
      },
      {
        path : "login",
        element : <Login/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
