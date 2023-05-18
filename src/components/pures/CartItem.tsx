import React from 'react'
import '../../styles/CartItem.scss'
//Redux
import { useDispatch } from 'react-redux'
import { decrement, increment, removeItem } from '../../features/cart/cartSlice'

interface Props{
    id:number,
    image:string,
    title:string,
    price:number,
    quantity:number
}

export default function CartItem({id,image,title,price,quantity}:Props) {

  const dispatch = useDispatch();

  

  return (
    <div className='cart-item'>
        <img className='cart-img' src={image} alt={title}/>
        <div className='cart-info-c'>
          <p className='cart-title'>{title}</p>
          <div className='cart-btn-c'>
              <div className='d-flex align-items-center cart-btn-quantity'>
                  <span className='cart-quantity'>{quantity}</span>
                  <button type='button' className='btn btn-light btn-quantity' onClick={()=> dispatch(increment(id))} style={{border:'1px solid #000', marginRight:'5px'}}>+</button>
                  <button type='button' className='btn btn-light btn-quantity' onClick={()=> dispatch(decrement(id))} style={{border:'1px solid #000'}} >-</button>
              </div>
              <button type='button' className='btn btn-danger' onClick={()=> dispatch(removeItem(id))}>Remove</button>
          </div>
          <p className='cart-price'>{`$${price}`}</p>
        </div>
    </div>
  )
}
