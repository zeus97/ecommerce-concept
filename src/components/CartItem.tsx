import React from 'react'
import '../styles/CartItem.scss'

interface Props{
    id:number,
    image:string,
    title:string,
    price:number,
    quantity:number
}

export default function CartItem({id,image,title,price,quantity}:Props) {
  return (
    <div className='cart-item'>
        <img className='cart-img' src={image} alt={title}/>
        <p className='cart-title'>{title}</p>
        <div className='cart-btn-c'>
            <div className='d-flex align-items-center cart-btn-quantity'>
                <span className='cart-quantity'>{quantity}</span>
                <button type='button' className='btn btn-light' style={{border:'1px solid #000', marginRight:'5px'}}>+</button>
                <button type='button' className='btn btn-light' style={{border:'1px solid #000'}} >-</button>
            </div>
            <button type='button' className='btn btn-danger'>Remove</button>
        </div>
        <p className='cart-price'>{`$${price}`}</p>
    </div>
  )
}
