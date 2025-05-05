import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { db } from '../../firebaseConfig';
import { addDoc, collection, connectFirestoreEmulator, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
  const [loading, SetLoading]= useState(true)
  const [todosLosProductos, setTodosLosProductos] =useState(null)
  const {categoria}= useParams()
  const [arrayDeProductos, setArray]= useState(null)
 
  const productosCollection= collection(db, "productos")
 
  // const filtrarDocumentos= ()=> {  traer productos filtrados
  //   const productos = query(
  //     productosCollection,
  //     where("nombre", "==", "producto a buscar")
  //   )
  // }
  

  useEffect(()=> {
    getDocs(productosCollection).then(snapshot=>{
      let arrayDeProductos= snapshot.docs.map(el => el.data())//traer los productos
      setArray(arrayDeProductos)
      SetLoading(false)
     
      


    }).catch(err=>console.error(err))}, [categoria])



  return (
    <div className='container-producto'>
      {
        loading ? 
        <Loader/>
        :
        categoria ? 
        arrayDeProductos.filter(el=> el.categoria===categoria).map(el => {
          return(
            <Item key={el.id} producto={el}/>
          )
        }) :
        arrayDeProductos.map(el => {
          return(
            <Item key={el.id} producto={el}/>
          )
        }) 

      }
    </div>
    
  )
}


export default ItemListContainer