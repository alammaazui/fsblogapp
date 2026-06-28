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
import AdminLayout from './components/admin/AdminLayout.jsx';
import Auth from './components/Auth.jsx';
import UserContext from './components/UserContext.jsx';
import AdminViewUsers from './components/admin/ViewUsers.jsx'
import AdminAddUser from './components/admin/AddUser.jsx'
import AdminAddBlog from './components/admin/AddBlog.jsx'
import AdminViewBlogs from './components/admin/ViewBlogs.jsx'
let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContext>
        <App />
      </UserContext>
    ),
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    element: (
      <UserContext>
        <Auth allowedRoles = {'admin'}/>
      </UserContext>
    ),
    children: [
      {
        path: "admin",
        element: <AdminLayout />,
        children : [
          {
            path :'viewusers',
            element : <AdminViewUsers/>
          },
          {
            path :'adduser',
            element : <AdminAddUser/>
          },
          {
            path :'viewblogs',
            element : <AdminViewBlogs/>
          },
          {
            path :'addblog',
            element : <AdminAddBlog/>
          },
        ]
      },
    ],
  },
  // {
  //   element: (
  //     <UserContext>
  //       <Auth allowedRoles = {['author']}/>
  //     </UserContext>
  //   ),
  //   children: [
  //     {
  //       path: "author",
  //       element: <AuthorLayout />,
  //     },
  //   ],
  // },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
