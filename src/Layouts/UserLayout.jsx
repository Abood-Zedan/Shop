import React from 'react'
import CustomNavbar from '../components/user/navbar/CustomNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/footer/Footer'
import useFetch from '../hooks/useFetch'
import LoadingPage from '../components/user/loading/LoadingPage'

export default function UserLayout() {

  const {isLoading} = useFetch(`https://ecommerce-node4.onrender.com/products?page=1&limit=10`)

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <>
      <CustomNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
