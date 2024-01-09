//Components
import NavBar from '../components/pures/NavBar'
import CartContainer from '../components/containers/CartContainer'
import Footer from '../components/pures/Footer'

export default function CartPage() {
  return (
    <section className='cart-section'>
        <NavBar />
        <CartContainer />
        <Footer />
    </section>
  )
}
