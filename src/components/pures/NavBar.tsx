import React, {useState} from 'react';
import '../../styles/Navbar.scss';
import { useNavigate } from 'react-router-dom'
//Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store';

export default function NavBar() {

    const cartItems = useSelector((state: RootState)=> state.cart.value)
    const cartCount = cartItems.length;

    const [menu, setMenu] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleMenu = ()=>{
        setMenu(!menu);
    };

  return (
    <header>
        <nav>
            <h1 onClick={()=>{navigate('/')}}>E-commerce</h1>
            <ul className='nav-list'>
                <li onClick={()=>{navigate('/electronics')}}>electronics</li>
                <li onClick={()=>{navigate('/jewelery')}}>jewelery</li>
                <li onClick={()=>{navigate('/mens-clothing')}}>men's clothing</li>
                <li onClick={()=>{navigate('/womens-clothing')}}>women's clothing</li>
            </ul>
            <div className='cart-box'>
            <i className="bi bi-list burger"
            onClick={handleMenu}></i>
                <i className="bi bi-cart" onClick={()=>{navigate('/cart')}}>
                    <div className='cart-counter'>{cartCount}</div>
                </i>
                
            </div>
        </nav>
        {menu && 
        <div className='burger-list'>
            <p onClick={()=>{navigate('/electronics'); setMenu(false)}}>electronics</p>
            <p onClick={()=>{navigate('/jewelery'); setMenu(false)}}>jewelery</p>
            <p onClick={()=>{navigate('/mens-clothing'); setMenu(false)}}>men's clothing</p>
            <p onClick={()=>{navigate('/womens-clothing'); setMenu(false)}}>women's clothing</p>
        </div>}
    </header>
  )
}