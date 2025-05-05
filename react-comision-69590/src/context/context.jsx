import { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const AppContext = createContext();

export const useAppContext = ()=> useContext(AppContext);

export const ContextProvider = (props) =>{
    const numero= 1

    const [carrito, setCarrito]= useState([]);

    function agregarAlCarrito(prod,cantidad){
        const nuevoProducto= {
            ...prod,
            cantidad
          }

        if(carrito.some(el=> el.id=== prod.id)){

           const newCarrito= carrito.map( el =>{
            if(el.id === prod.id){
                
                return{
                    ...el,
                    cantidad: el.cantidad + cantidad
                    
                }
               
            }else{
                return el;
                
            }
            
           })
           setCarrito(newCarrito)
           toast.success('¡Producto agregado al carrito!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });

        }else{
            setCarrito([...carrito, nuevoProducto])
            toast.success('¡Producto agregado al carrito!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
              });
        }  
      }

    return(
        <AppContext.Provider value={{numero, carrito, agregarAlCarrito}}>
            {props.children}
        </AppContext.Provider>
    )
}