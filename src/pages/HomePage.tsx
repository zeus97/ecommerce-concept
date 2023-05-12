import React from 'react'

//Components
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import ProductContainer from '../components/ProductContainer'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
        <NavBar />
        <Carousel />
        <ProductContainer />
        <Footer />
    </>
  )
}
