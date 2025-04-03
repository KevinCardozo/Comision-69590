import CartWidget from '../CartWidget/CartWidget';
import './Item.css';

function Item({producto, filtrarProducto}) {
    const {nombre, precio, stock}= producto

  return (
     <div className='card p-3 m-2'>
        <h2 className='card-header'>{nombre}</h2>
        <h3 className='card-body'>${precio}</h3>
        <button className='btn btn-secondary my-2' onClick={()=>(console.log("vas a agregar ", producto ))}> Agregar al carrito</button>
        <button className='btn btn-secondary my-2' onClick={()=> filtrarProducto(producto)}>Ver detalle</button>
      </div> 
    
  )
}

export default Item


