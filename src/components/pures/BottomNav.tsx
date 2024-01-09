import { useNavigate, useLocation} from 'react-router-dom'
import '../../styles/BottomNav.scss'

function BottomNav() {
    const navigate = useNavigate();
    const pathURL = useLocation().pathname;

  return (
    <nav className='bottom-nav'>
        <a
        className={pathURL !== '/cart' ? 'active' : '' }
        onClick={()=>{navigate('/'); window.scrollTo(0,0);}}>
            <i className="bi bi-house-door-fill"></i>
        </a>
        <a
        className={pathURL === '/cart' ? 'active' : '' }
        onClick={()=>{navigate('/cart'); window.scrollTo(0,0);}}>
            <i className="bi bi-cart-fill"></i>
        </a>
    </nav>
  )
}

export default BottomNav