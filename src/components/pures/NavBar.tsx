import React, {useState, useEffect } from 'react';
import '../../styles/Navbar.scss';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom'
//Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store';

export default function NavBar() {
    //Redux variable
    const cartItems = useSelector((state: RootState)=> state.cart.value)
    const cartCount = cartItems.length;
    //Show the burger menu
    const [menu, setMenu] = useState<boolean>(false);

    const handleMenu = ()=>{
        setMenu(!menu);
    };
    //Navigate
    const navigate = useNavigate();
    //Navbar animation
    const [scrollNav, setScrollNav] = useState<boolean>(false);
    const handlescrollNav = ()=>{
        if(window.scrollY > 100){
            setScrollNav(true);
        }else{setScrollNav(false)}
    };
    useEffect(()=>{
        window.addEventListener('scroll',handlescrollNav);

        return ()=> removeEventListener('scroll',handlescrollNav)
    },[])


  return (
    <header className={scrollNav ? 'nav-animation' : undefined}>
        <nav>
            <a href='#home' className='nav-title'><img src={logo} alt='logo' onClick={()=>{navigate('/')}} /></a>
            <ul className='nav-list'>
                <a href='#home'><li onClick={()=>{navigate('/electronics')}}>electronics <div ></div></li></a>
                <a href='#home'><li onClick={()=>{navigate('/jewelery')}}>jewelery <div ></div></li></a>
                <a href='#home'><li onClick={()=>{navigate('/mens-clothing')}}>men's clothing <div ></div></li></a>
                <a href='#home'><li onClick={()=>{navigate('/womens-clothing')}}>women's clothing <div ></div></li></a>
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
            <a href='#home'><p onClick={()=>{navigate('/electronics'); setMenu(false)}}>electronics</p></a>
            <a href='#home'><p onClick={()=>{navigate('/jewelery'); setMenu(false)}}>jewelery</p></a>
            <a href='#home'><p onClick={()=>{navigate('/mens-clothing'); setMenu(false)}}>men's clothing</p></a>
            <a href='#home'><p onClick={()=>{navigate('/womens-clothing'); setMenu(false)}}>women's clothing</p></a>
        </div>}
    </header>
  )
}
