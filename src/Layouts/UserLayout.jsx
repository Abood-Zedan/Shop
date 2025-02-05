import React from 'react'
import CustomNavbar from '../components/user/navbar/CustomNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/footer/Footer'

export default function UserLayout() {
  return (
    <>
      <CustomNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
