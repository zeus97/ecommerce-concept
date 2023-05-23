import React, { useState, useEffect } from 'react'

//Components
import NavBar from '../components/pures/NavBar'
import Carousel from '../components/pures/Carousel'
import ProductContainer from '../components/containers/ProductContainer'
import Footer from '../components/pures/Footer'
import SubscribeForm from '../components/forms/SubscribeForm'

export default function HomePage() {

  const [form, setForm] = useState<boolean>(false);
  const closeForm = ()=>{
    setForm(false);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setForm(true)
    },3000)
  },[])

  return (
    <>
        <NavBar />
        <div id='home'></div>
        <Carousel />
        <ProductContainer />
        <Footer />
        {form && <SubscribeForm closeForm={closeForm} animation={form} />}
        {!form && <div className='subscribe' onClick={()=>{setForm(true)}}>Subscribe</div>}
    </>
  )
}
