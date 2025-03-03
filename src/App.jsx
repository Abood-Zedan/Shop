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
import UserContextProvider from './components/user/context/UserContext'
import SendCode from './pages/user/forgotPassword/SendCode'
import ForgotPassword from './pages/user/forgotPassword/ForgotPassword'
import Contact from './pages/user/contact/Contact'
import Categories from './pages/user/categories/Categories'
import UserOrders from './pages/user/profile/UserOrders'
import Order from './pages/user/cart/Order'
import DisplayOrder from './pages/user/profile/DisplayOrder'
import AuthProtectedRoute from './components/user/protectedRoute/AuthProtectedRoute'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/auth',
      element:
        <AuthProtectedRoute>
          <AuthLayout />
        </AuthProtectedRoute>,
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
          element: <SendCode />
        },
        {
          path: 'forgotPassword',
          element: <ForgotPassword />
        },
      ]
    },
    {
      path: '/',
      element:
        <UserContextProvider>
          <CartContextProvider>
            <UserLayout />
          </CartContextProvider>
        </UserContextProvider>,
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
          element:
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
        },
        {
          path: 'profile',
          element:
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>,
          children: [
            {
              path: 'userInfo',
              element: <UserInfo />
            },
            {
              path: 'orders',
              element: <UserOrders />
            },
            {
              path: 'displayOrder/:orderId',
              element: <DisplayOrder />
            },
          ]
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'order',
          element:
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
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

      <ToastContainer />
      <RouterProvider router={router} />

    </>
  )
}
