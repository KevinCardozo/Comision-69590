import { useAppContext } from '../../context/context';
import './CartWidget.css';
import { IoMdCart } from "react-icons/io";


function CartWidget() {
  
  const {carrito}= useAppContext()

  return (
    <div>
      <IoMdCart />
      <p>({carrito.reduce((acc,el)=> acc+el.cantidad,0)})</p>

    </div>
    
     
  )
}

export default CartWidget
