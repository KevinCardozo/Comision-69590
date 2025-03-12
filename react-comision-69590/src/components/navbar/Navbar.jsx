import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

function navbar() {

  return (
    <header>
        <nav className='nav-bar'>
        <h1>ZUGE</h1>
            <ul className='nav-bar-items'>
                <li>inicio</li>
                <li>productos</li>
                <li>contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
    
  )
}

export default navbar