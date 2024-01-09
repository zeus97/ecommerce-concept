import { useState, useEffect } from 'react';
import '../../styles/Navbar.scss';
import logo from '../../images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom'
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
    const pathURL = useLocation().pathname;
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
            <a className='nav-title'>
                <img src={logo} alt='logo' onClick={()=>{
                    window.scrollTo(0,0);
                    navigate('/')
                    }} />      
            </a>
            <ul className='nav-list'>
                <a>
                    <li className={pathURL === '/electronics' ? 'active-link' : ''}
                    onClick={()=>{
                        window.scrollTo(0,0);
                        navigate('/electronics')}}>
                        electronics <div className={pathURL === '/electronics' ? 'act-b' : ''} ></div>
                    </li>
                </a>
                <a>
                    <li className={pathURL === '/jewelery' ? 'active-link' : ''}
                    onClick={()=>{
                        window.scrollTo(0,0);
                        navigate('/jewelery')}}>
                        jewelery <div className={pathURL === '/jewelery' ? 'act-b' : ''}  ></div>
                    </li>
                </a>
                <a>
                    <li className={pathURL === '/mens-clothing' ? 'active-link' : ''}
                    onClick={()=>{
                        window.scrollTo(0,0);
                        navigate('/mens-clothing')}}>
                        men's clothing <div className={pathURL === '/mens-clothing' ? 'act-b' : ''} ></div>
                    </li>
                </a>
                <a>
                    <li className={pathURL === '/womens-clothing' ? 'active-link' : ''}
                    onClick={()=>{
                        window.scrollTo(0,0);
                        navigate('/womens-clothing')}}>
                    women's clothing <div className={pathURL === '/womens-clothing' ? 'act-b' : ''} ></div>
                    </li>
                </a>
            </ul>
            <div className='cart-box'>
            <i className="bi bi-list burger" onClick={handleMenu}></i>
                <i className="bi bi-cart" onClick={()=>{navigate('/cart'); window.scrollTo(0,0);}}>
                    <div className='cart-counter'>{cartCount}</div>
                </i>
                
            </div>
        </nav>
        {menu && 
        <div className='burger-list'>
            <a><p onClick={()=>{window.scrollTo(0,0); navigate('/electronics'); setMenu(false)}}>electronics</p></a>
            <a><p onClick={()=>{window.scrollTo(0,0); navigate('/jewelery'); setMenu(false)}}>jewelery</p></a>
            <a><p onClick={()=>{window.scrollTo(0,0); navigate('/mens-clothing'); setMenu(false)}}>men's clothing</p></a>
            <a><p onClick={()=>{window.scrollTo(0,0); navigate('/womens-clothing'); setMenu(false)}}>women's clothing</p></a>
        </div>}
    </header>
  )
}
