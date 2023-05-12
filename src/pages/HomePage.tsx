import React from 'react'

//Components
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import ProductContainer from '../components/ProductContainer'

export default function HomePage() {
  return (
    <>
        <NavBar />
        <Carousel />
        <ProductContainer />
    </>
  )
}
