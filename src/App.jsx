import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout'
import Login from './pages/user/login/Login'
import DashboardLayout from './Layouts/DashboardLayout'
import Register from './pages/user/register/Register'
import Home from './pages/user/home/Home'
import { ToastContainer } from 'react-toastify'
import UserLayout from './Layouts/UserLayout'
import ProductsCategories from './pages/user/products/ProductsCategories'
import Products from './pages/user/products/Products'
import Product from './pages/user/products/Product'
import Cart from './pages/user/cart/Cart'
import ProtectedRoute from './components/user/protectedRoute/ProtectedRoute'
import CartContextProvider from './components/user/context/CartContext'
import Profile from './pages/user/profile/Profile'
import UserInfo from './pages/user/profile/UserInfo'
import Orders from './pages/user/profile/Orders'
import UserContextProvider from './components/user/context/UserContext'
import SendCode from './pages/user/forgotPassword/SendCode'
import ForgotPassword from './pages/user/forgotPassword/ForgotPassword'
import Contact from './pages/user/contact/Contact'
import Categories from './pages/user/categories/categories'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'Login',
          element: <Login />,
        },
        {
          path: 'Register',
          element: <Register />,
        },
        {
          path: 'sendCode',
          element: <SendCode/>
        },
        {
          path: 'forgotPassword',
          element: <ForgotPassword/>
        },
      ]
    },
    {
      path: '/',
      element: <UserLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'categories',
          element:
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
        },
        {
          path: 'categories/:categoryId',
          element:
            <ProtectedRoute>
              <ProductsCategories />
            </ProtectedRoute>
        },
        {
          path: 'products',
          element:
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
        },
        {
          path: 'products/:productId',
          element: <Product />
        },
        {
          path: 'cart',
          element:
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
        },
        {
          path: 'cart/:productId',
          element: <Product />
        },
        {
          path: 'profile',
          element: <Profile />,
          children: [
            {
              path: 'userInfo',
              element: <UserInfo />
            },
            {
              path: 'orders',
              element: <Orders />
            },
          ]
        },
        {
          path: 'contact',
          element: <Contact/>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
    }
  ])
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </>
  )
}
