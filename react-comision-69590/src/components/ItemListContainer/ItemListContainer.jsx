import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';

function ItemListContainer() {
  const [loading, SetLoading]= useState(true)
  const [todosLosProductos, setTodosLosProductos] =useState(null)
  const {categoria}= useParams()
 


  useEffect(()=> {
    if (!todosLosProductos){
    fetchData(false)
    .then(response => {
      setTodosLosProductos(response)
      SetLoading(false)
  },500)
    .catch(err=> console.error(err))
}
  }, [categoria])


  return (
    <div className='container-producto'>
      {
        loading ? 
        <Loader/>
        :
        categoria ? 
        todosLosProductos.filter(el=> el.categoria===categoria).map(el => {
          return(
            <Item key={el.id} producto={el}/>
          )
        }) :
        todosLosProductos.map(el => {
          return(
            <Item key={el.id} producto={el}/>
          )
        }) 

      }
    </div>
    
  )
}

export default ItemListContainer