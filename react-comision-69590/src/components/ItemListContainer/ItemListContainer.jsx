import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer() {
  const [loading, SetLoading]= useState(true)
  const [todosLosProductos, setTodosLosProductos] =useState(null)
  const [productoFiltrado, setProductoFiltrado]= useState(null)





  // useEffect(()=> {
  //   setTimeout(()=>{
  //     SetLoading(false)
  //   }, 2500)
  // }, [])

  useEffect(()=> {
    fetchData(false)
    .then(response => {
      setTodosLosProductos(response)
      SetLoading(false)
  })
    .catch(err=> console.error(err))
  }, [])


  return (
    <div className='container-producto'>
      {
        loading ? 
        <Loader/>
        :
        todosLosProductos.map(el => {
          return(
            <Item key={el.id} producto={el} filtrarProducto={setProductoFiltrado}/>
          )
        })
      }{
        productoFiltrado &&
        <ItemDetail producto={productoFiltrado} volverAlInicio={()=> setProductoFiltrado(null)} />
        
      }
    </div>
    
  )
}

export default ItemListContainer