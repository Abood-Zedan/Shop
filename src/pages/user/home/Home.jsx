import React from 'react'
import Header from '../../../components/user/header/Header'
import DisplayCategories from '../../../components/user/displayCategories/DisplayCategories'
import Features from '../../../components/user/features/Features'
import WorkProcessing from '../../../components/user/workProcessing/WorkProcessing'
import DisplayProductsToHome from '../../../components/user/displayProductsToHome/DisplayProductsToHome'

export default function Home() {
  return (
    <>
      <Header/>
      <Features/>
      <DisplayCategories/>
      <DisplayProductsToHome/>
      <WorkProcessing/>
    </>
  )
}
