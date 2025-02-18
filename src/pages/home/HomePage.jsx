import React from 'react'
import { useContext } from "react";
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import myContext from '../../context/myContext'

const HomePage = () => {
  const context = useContext(myContext);
  const name = context
  return (
    <div>
      <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      </Layout>
    </div>
  )
}

export default HomePage