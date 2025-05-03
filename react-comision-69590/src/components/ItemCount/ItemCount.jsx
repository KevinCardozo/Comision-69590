import { useState } from 'react';
import './ItemCount.css';


//props: compartir del componente padre al componenet hijo
///spread opereator: desaparrame elementions de un objeto, los separa
//Destructuracion: nos permite obtener valores y guardarlo en variables

function ItemCount({stock, counter, setCounter}) {
    
    
    function modificadorContador(operacion){
        if(operacion === "+"){
            if(counter< stock){
                setCounter(counter + 1)
            }
           
        } else{
            if(counter>1){
                setCounter(counter- 1)
            }
           
        }
    }

  return (
    <div className='boton-content'>
        <div className='boton'>
        <button className='btn btn-secondary' onClick={()=> modificadorContador("-")}>-</button>
        <h3>{counter}</h3>
        <button className='btn btn-secondary' onClick={()=> modificadorContador("+")}>+</button>
    </div>
    </div>
  
  

  )
}

export default ItemCount