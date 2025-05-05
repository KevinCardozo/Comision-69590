import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function ItemDetail() {
  const [loading, SetLoading]= useState(true)
  const {id}= useParams()
  const [counter, setCounter]= useState(1)
  const [producto, setProducto]= useState(null)

   const productosCollection= collection(db, "productos")

  const {agregarAlCarrito}= useAppContext()

    useEffect(()=> {
      getDocs(productosCollection).then(snapshot=>{
        let productoAMostrar= snapshot.docs.map(el => el.data()) //traer los productos
        .find(el=> el.id === parseInt(id))
        setProducto(productoAMostrar)
        setTimeout(()=>{
              SetLoading(false)
              }, 800)
  
      }).catch(err=>console.error(err))},[])

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