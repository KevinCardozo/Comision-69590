import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';


function navbar() {

  const carrito = [1,2,3,4,5]

  return (
    <header>
        <nav className='nav-bar'>
        <h1>ZUGE</h1>
            <ul className='nav-bar-items'>
              <Link to="/">
              <li>inicio</li>
              </Link>
              <Link to="/categoria/remeras">
              <li>Remeras</li>
              </Link>
              <Link to="/categoria/buzos">
              <li>Buzos</li>
              </Link>
            </ul>
            <Link to="/detalleCarrito">
            <CartWidget/>
            </Link>
            
            
        </nav>
    </header>
    
  )
}

export default navbar