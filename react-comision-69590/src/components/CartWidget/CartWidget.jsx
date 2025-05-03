import { useAppContext } from '../../context/context';
import './CartWidget.css';
import { IoMdCart } from "react-icons/io";


function CartWidget() {
  
  const {numero, carrito}= useAppContext()

  return (
    <div>
      <IoMdCart />
      <p>({carrito.length})</p>

    </div>
    
     
  )
}

export default CartWidget
