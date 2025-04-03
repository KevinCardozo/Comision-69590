import './ItemDetail.css';

function ItemDetail({producto, volverAlInicio}) {
    const {nombre, precio, stock}= producto

  return (
     <div className='card p-3 m-2'>
        <h2 className='card-header'><b>{nombre}</b></h2>
        <h3 className='card-body'>${precio}</h3>
        <h4 className='card-body'>Quedan {stock} disponibles</h4>
        <button className='btn btn-secondary my-2' onClick={()=>(console.log("vas a agregar ", producto ))}> Agregar al carrito</button>
        <button className='btn btn-secondary my-2' onClick={volverAlInicio}>Volver al inicio</button>
      </div> 
    
  )
}

export default ItemDetail