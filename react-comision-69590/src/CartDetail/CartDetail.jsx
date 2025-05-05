
import { Link } from 'react-router';
import Item from '../components/Item/Item';
import { useAppContext } from '../context/context';
import './CartDetail.css';


function CartDetail() {
  
    const {carrito}= useAppContext()
    console.log(carrito)

  return (
    <div id='contenedorCart' className="carrito">
        <h2>Detalle Del carrito</h2>
        {
            carrito ?
            carrito.map(el=> {
                return(
                    <div id='detalleCart' className='card p-2 m-3'>
                        <h2>{el.nombre}</h2>
                        <img src={el.img} alt="" />
                        <h3>Cantidad: {el.cantidad}</h3>
                        <h4>Precio: $ {el.cantidad*el.precio}</h4>
                    </div>
                )
            }):
            <p>Carrito Vacio</p>

        }
        <h3>Precio Total: ${carrito.reduce((acc,el)=> acc+ (el.precio * el.cantidad),0)}</h3>
        <Link to="/formularioDeCompra">
        <button className='btn btn-secondary'>finalizar compra</button>
        </Link>

    </div>
    
     
  )
}

export default CartDetail