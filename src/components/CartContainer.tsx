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
            <div className='col-md-6 col-sm-12 cart-items'>
            {cartItems.length < 1 ?
            <h2>You don't have items on the cart</h2>
            :
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
            <div className='col-md-6 col-sm-12 cart-info'></div>
        </div>

    </div>
  )
}
