import React, { useState } from 'react'
import '../styles/Product.scss'

//Redux
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'


interface Props {
    id:number,
    image:string,
    title:string,
    price:number,
    description:string,
    category:string
}

export default function Product({id,image,title,price,description,category}:Props) {

    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    if(description.length > 500){
        description = '';
    };

    const dispatch = useDispatch()

    const addItemCart = ()=>{
        const item = {
            id:id,
            image:image,
            title:title,
            price:price,
            description:description,
            category:category,
            quantity: 1
        };
        dispatch(addItem(item));
        setDisabledButton(true);
    }

  return (
    <div className='product'>
        <img className='product-img' src={image} alt={title}/>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{`$${price}`}</p>

        <div className='product-modal'>
            <p className='product-description'>{description}</p>
            {disabledButton ?
            <button
            type='button'
            className='btn btn-primary product-button'
            disabled>
               Add to Cart
           </button>
           :
            <button
             type='button'
             className='btn btn-primary product-button'
             onClick={addItemCart}>
                Add to Cart
            </button>
           
           }
        </div>
    </div>
  )
}
