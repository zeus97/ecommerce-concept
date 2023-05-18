import React from 'react'
import '../../styles/ModalItem.scss'
//Redux
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

interface Props{
    id:number,
    price:number,
    category:string,
    img:string,
    title:string,
    description:string,
    closeModal: () => void,
    modal: ()=> void
}

function ModalItem({id,price,category,img,title,description,closeModal,modal}:Props) {

    const dispatch = useDispatch();

    const item = {
        id:id,
        image:img,
        title:title,
        price:price,
        description:description,
        category:category,
        quantity: 1
    };
    const addItemCart = ()=>{
        dispatch(addItem(item));
        modal();
    };

  return (
    <div className='item-modal-c'>
        <div className='item-modal row'>
            <div className='col-6 item-modal-column d-flex justify-content-center align-items-center'
            style={{borderRight: '2px solid #b8b8b8'}}>
                <img src={img} alt={title} />
            </div>
            <div className='col-6 item-modal-column p-3 d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-x" onClick={closeModal}></i>
                <p className='item-modal-title'>{title}</p>
                <p className='item-modal-description'>{description}</p>
                <button type='button'
                 className='btn btn-primary'
                 onClick={addItemCart}>Add to cart</button>
            </div>

        </div>

    </div>
  )
}

export default ModalItem