import React, { useState,useEffect } from 'react'
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

const products = useSelector((state: RootState) => state.product.value);
const dispatch = useDispatch()

const [modal, setModal] = useState<boolean>(false);

let location = useLocation();

//Modal function
const hanldeModal = ()=>{
    setModal(true);
}

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
    <>
        <div className='container product-container'>
            { products.length < 1 ?
            <h1>Not products found.</h1>
            :
                products.map((p,i)=>{
                    return (
                        
                        <Product
                        key={i}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        price={p.price}
                        category={p.category}
                        modal={hanldeModal} />
                    )
                })
            }

        </div>
    
        { modal &&
            <div className={modal ? 'product-modal fade-modal' : 'product-modal '}
            onClick={()=>{setModal(false)}}>
                <div>
                    <i className="bi bi-x" onClick={()=>{setModal(false)}}></i>
                    <div className="alert alert-success" role="alert">
                        New item added to the cart!
                    </div>
                </div>
            </div>
        }
    
    </>
  )
}

export default ProductContainer