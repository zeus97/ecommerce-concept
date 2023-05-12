import React from 'react'
import '../styles/Product.scss'

interface Props {
    image:string,
    title:string,
    price:string,
    description:string
}

export default function Product({image,title,price,description}:Props) {

    if(description.length > 500){
        description = '';
    }
  return (
    <div className='product'>
        <img className='product-img' src={image} alt={title}/>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{`$${price}`}</p>

        <div className='product-modal'>
            <p className='product-description'>{description}</p>
            <button type='button' className='btn btn-primary product-button'>Add to Cart</button>
        </div>
    </div>
  )
}
