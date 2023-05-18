import React from 'react'

//Components
import NavBar from '../components/pures/NavBar'
import Carousel from '../components/pures/Carousel'
import ProductContainer from '../components/containers/ProductContainer'
import Footer from '../components/pures/Footer'

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
