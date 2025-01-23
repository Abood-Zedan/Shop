import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout'
import Login from './pages/user/login/Login'
import DashboardLayout from './Layouts/DashboardLayout'
import Register from './pages/user/register/Register'
import Home from './pages/user/home/Home'
import { ToastContainer } from 'react-toastify'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'Login',
          element: <Login/>,
        },
        {
          path: 'Register',
          element: <Register/>,
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout/>,
    }
  ])
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router} /> 
    </>
  )
}
