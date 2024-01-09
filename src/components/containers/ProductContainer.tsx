import { useState,useEffect } from 'react'
import '../../styles/ProductContainer.scss'
//get the URL by location hook
import { useLocation } from 'react-router-dom'
//Component
import ModalItem from '../pures/ModalItem';
import Product from '../pures/Product';
//API requests
import { getAllProducts, getCategory, } from '../../services';
//Redux
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../features/product/productSlice'
//Interface
import { IProduct } from '../../interfaces';
import Skeleton from '../pures/Skeleton';


function ProductContainer() {

const products = useSelector((state: RootState) => state.product.value);
const dispatch = useDispatch()

const [modal, setModal] = useState<boolean>(false);
const [modalItem, setModalItem] = useState<boolean>(false);
const [modalInfo, setModalInfo] = useState<IProduct>({id:0,title:'',price:0,category:'',description:'',image:''});
const [isLoading, setIsLoading] = useState<boolean>(false);

let location = useLocation();

//Modal function
const hanldeModal = ()=>{
    setModal(true);
};

//Modal Item functions
const handleModalItem = (id:number,price:number,category:string,img:string,title:string,description:string) =>{
    let info = {
        id,
        title,
        price,
        category,
        description,
        image:img
    }
    setModalInfo(info);
    setModalItem(true);
};

const closeModalItem = ()=>{
    setModalItem(false);
};

useEffect(()=>{
    if (location.pathname == '/'){
        setIsLoading(true);
        getAllProducts()
        .then((res)=>{dispatch(setProducts(res.data));})
        .catch((error)=>{console.log(error)})
        .finally(()=>{setIsLoading(false)})
    } else {
        setIsLoading(true);
        getCategory(location.pathname)
        .then((res)=>{dispatch(setProducts(res.data));})
        .catch((error)=>{console.log(error)})
        .finally(()=>{setIsLoading(false)})
    } 

    
},[location.pathname]);

    if(products.length < 1 || isLoading){return <Skeleton />}

  return (
    <>
        <div className='container product-container'>
            {
                products.map((p,i)=>{
                    return (
                        
                        <Product
                        key={i}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        price={p.price}
                        category={p.category}
                        modal={hanldeModal}
                        itemModal={handleModalItem} />
                    )
                })
            }

        </div>
    
        { modal &&
            <div className={modal ? 'product-modal fade-modal' : 'product-modal '}
            onClick={()=>{setModal(false)}}>
                <div>
                    <i className="bi bi-x" onClick={()=>{setModal(false)}}></i>
                    <div className="alert alert-success" role="alert">
                        Item added to the cart!
                    </div>
                </div>
            </div>
        }
        {modalItem &&
            <ModalItem
            id={modalInfo.id}
            price={modalInfo.price}
            category={modalInfo.category} 
            img={modalInfo.image}
            title={modalInfo.title}
            description={modalInfo.description}
            closeModal={closeModalItem}
            modal={hanldeModal}/>
         }
    
    </>
  )
}

export default ProductContainer