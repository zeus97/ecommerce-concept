import React from 'react'
import '../styles/CartContainer.scss'
//Redux
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import CartItem from './CartItem'

export default function CartContainer() {

    const cartItems = useSelector((state: RootState)=> state.cart.value)

  return (
    <div className='container cart-container-box'>
        <div className='row cart-container'>
            <div className='col-6 cart-items'>
            {
                cartItems.map((p)=>{
                    return (
                        <CartItem
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        price={p.price}
                        quantity={p.quantity}
                         />
                    )
                })
            }
            </div>
            <div className='col-6 cart-info'></div>
        </div>

    </div>
  )
}
