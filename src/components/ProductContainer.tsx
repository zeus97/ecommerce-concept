import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import '../styles/ProductContainer.scss'
import { IProduct } from '../interfaces'
import Product from './Product';
import { getAllProducts, getElectronicProducts, getJeweleryProducts , getMenClothingsProducts, getWomenClothingsProducts } from '../services';

function ProductContainer() {

const [products, setProducts] = useState<IProduct[]>([]);

let location = useLocation();

useEffect(()=>{
    console.log(location.pathname);
    if (location.pathname == '/electronics'){
        getElectronicProducts()
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>{console.log(error)})
    } else if(location.pathname == '/jewelery'){

        getJeweleryProducts()
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>{console.log(error)})
    } else if(location.pathname == "/mens-clothing"){
        getMenClothingsProducts()
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>{console.log(error)})
    } else if (location.pathname == "/womens-clothing"){
        getWomenClothingsProducts()
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>{console.log(error)})
    } else{
        getAllProducts()
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>{console.log(error)})
    }

    
},[location.pathname])

  return (
    <div className='container product-container'>
        {
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