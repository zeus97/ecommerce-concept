import { useState } from 'react'
import '../../styles/Product.scss'
//Redux
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
//Interface
import { ICart } from '../../interfaces'



interface Props {
    id:number,
    image:string,
    title:string,
    price:number,
    description:string,
    category:string,
    modal: () => void,
    itemModal: (id:number,price:number,category:string,img:string,title:string,description:string)=> void
}

export default function Product({id,image,title,price,description,category, modal,itemModal}:Props) {

    
    const [disabledButton, setDisabledButton] = useState(false)

    
    if(description.length > 500){
        description = '';
    };

    const item: ICart = {
        id:id,
        image:image,
        title:title,
        price:price,
        description:description,
        category:category,
        quantity: 1
    };

    const dispatch = useDispatch();
         
      

    const addItemCart = ()=>{
        dispatch(addItem(item));
        setDisabledButton(true);
        modal();
    };

  return (
    <div className='product'>
        <img className='product-img' src={image} alt={title}/>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{`$${price}`}</p>

        <div className='product-modal'>
            <div className='product-btn-c'>
                <button type='button'
                 className='btn btn-secondary product-button'
                 onClick={()=>{itemModal(id,price,category,image,title,description)}}>Quick View
                 </button>
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
    </div>
  )
}
