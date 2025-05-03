import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';

function ItemDetail() {
  const [loading, SetLoading]= useState(true)
  const {id}= useParams()
  const [counter, setCounter]= useState(1)
  const [producto, setProducto]= useState(null)

  const {agregarAlCarrito}= useAppContext()
  

    // function agregarAlCarrito(prod){
    //   const nuevoProducto= {
    //     ...prod,
    //     cantidad: counter
    //   }
    //   console.log("agregaste", nuevoProducto)
    //   setCounter(1)
    // }

    useEffect(()=> {
      fetchData()
    .then(response => {
      const productoAMostrar= response.find(el =>el.id=== parseInt(id))
      setProducto(productoAMostrar)
      setTimeout(()=>{
        SetLoading(false)
      }, 500)
    

      // setTodosLosProductos(response)
      // SetLoading(false)
  })
    .catch(err=> console.error(err))
  }, [])

  return (
     <div className='card p-3 m-2' >
      {
        loading ?
        <Loader/> :
          <div>
            {
              producto ?
              <>
                <h2 className='card-header'><b>{producto.nombre}</b></h2>
                <img className="img-detail"src={producto.img} alt="Zuge-club" />
                <h3 className='card-body'>${producto.precio}</h3>
                <h4 className='card-body'>Quedan {producto.stock} disponibles</h4>
                <ItemCount stock={producto.stock} counter={counter} setCounter={setCounter}/>
                <button className='btn btn-primary my-2 m-2' onClick={()=>agregarAlCarrito(producto,counter)}> Agregar al carrito</button>
                <Link to="/">
                <button className='btn btn-secondary my-2'>Volver al inicio</button>
                </Link>
              </>
                :
                <p>producto no encontrado</p>
            }
            </div>
     
    
      }
        
      </div> 
  )
}

export default ItemDetail