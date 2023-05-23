import { useState,useEffect } from 'react'
import '../../styles/CartContainer.scss'

//Redux
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import CartItem from '../pures/CartItem'

export default function CartContainer() {

    const cartItems = useSelector((state: RootState)=> state.cart.value);
    const [total, setTotal] = useState<string>('');

    const getTotal = ()=>{
        if (cartItems.length > 0){
            
            let sum = 0;
            cartItems.map((item)=>{
                let x = item.quantity * item.price;
                 sum = sum + x})
            let totalSum= sum.toFixed(2);
            setTotal(totalSum);
        }else {
            setTotal('');
        }
    };

    useEffect(()=>{ getTotal();},[cartItems])

   
    

  return (
    <div className='container cart-container-box'>
        <div className='row cart-container'>
            <div className='col-md-6 col-sm-12 cart-items'>
            {cartItems.length < 1 ?
            <h2 className='mt-3'>You don't have items on the cart</h2>
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
            <div className='col-md-6 col-sm-12 cart-info'>
                {cartItems.length < 1 ?
                    null
                    :
                    cartItems.map((p)=>{
                        return (
                            <div key={p.id} style={{borderBottom : '1px solid #000'}}>
                                <p>{p.quantity + 'x' + ' ' + p.title}</p>
                            </div>
                        )
                    })
                }
                {total.length > 0 &&
                 <div className='total-c'>
                    <h2 className='text-center'>Total: ${total}</h2>
                    <button type='button' className='btn btn-warning'>Checkout</button>
                </div>}
            </div>
        </div>

    </div>
  )
}
