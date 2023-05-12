import React, { useEffect } from 'react'
import '../styles/ProductContainer.scss'
//get the URL by location hook
import { useLocation } from 'react-router-dom'
//Component
import Product from './Product';
//API requests
import { getAllProducts, getCategory, } from '../services';
//Redux
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../features/product/productSlice'

function ProductContainer() {

const products = useSelector((state: RootState) => state.product.value)
const dispatch = useDispatch()

let location = useLocation();

useEffect(()=>{
    console.log(location.pathname);
    if (location.pathname == '/'){
        getAllProducts()
        .then((res)=>{dispatch(setProducts(res.data))})
        .catch((error)=>{console.log(error)})
    } else {
        getCategory(location.pathname)
        .then((res)=>{dispatch(setProducts(res.data))})
        .catch((error)=>{console.log(error)})
    } 

    
},[location.pathname])

  return (
    <div className='container product-container'>
        { products.length < 1 ?
        <h1>Not products found.</h1>
        :
            products.map((p,i)=>{
                return (
                    <Product
                    key={i}
                    image={p.image}
                    title={p.title}
                    description={p.description}
                    price={p.price} />
                )
            })
        }

    </div>
  )
}

export default ProductContainer