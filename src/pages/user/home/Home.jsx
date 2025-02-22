import React from 'react'
import Header from '../../../components/user/header/Header'
import DisplayCategories from '../../../components/user/displayCategories/DisplayCategories'
import Features from '../../../components/user/features/Features'
import WorkProcessing from '../../../components/user/workProcessing/WorkProcessing'
import DisplayProductsToHome from '../../../components/user/displayProductsToHome/DisplayProductsToHome'
import Trend from '../../../components/user/trend/Trend'
import Banner from '../../../components/user/banner/Banner'
import Deal from '../../../components/user/deal/Deal'
import Newsletter from '../../../components/user/newsletter/Newsletter'

export default function Home() {
  return (
    <>
      <Header/>
      <Features/>
      <DisplayCategories/>
      <Banner/>
      <DisplayProductsToHome/>
      <WorkProcessing/>
      <Trend/>
      <Deal/>
      <Newsletter/>
    </>
  )
}
