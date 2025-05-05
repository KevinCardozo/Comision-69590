import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Item.css';
import { Link } from 'react-router';
import { useAppContext } from '../../context/context';

function Item({producto, filtrarProducto}) {
    const {id, nombre, precio}= producto
    const {agregarAlCarrito}= useAppContext()

 

  return (
     <div className='card p-3 m-2'>
        <h2 className='card-header'>{nombre}</h2>
        <img className='img-item' src={producto.img} alt="" />
        <h3 className='card-body'>${precio}</h3>
        <button className='btn btn-secondary my-2' onClick={()=>agregarAlCarrito(producto,1)}> Agregar al carrito</button>
        <Link to={`/detalle/${id}`}>
        <button className='btn btn-secondary my-2' onClick={()=> filtrarProducto(producto,1)}>Ver detalle</button>
        </Link>
       
      </div> 
    
  )
}

export default Item


