
import { useState } from 'react';
import Item from '../components/Item/Item';
import { useAppContext } from '../context/context';
import './FormBuy.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2';



const ordenesCollection= collection(db,"ordenes")

function FormBuy() {

    const {carrito}= useAppContext()

    const [form, setForm]= useState({
        nombre:"",
        telefono:"",
        mail: "",
        carrito
    
    })

    const guardarCambio= ({target})=>{
        const {name,value}= target
        setForm(e=>({
            ...e,
            [name]: value

        }))
    }

    const envioDeFormulario = e=> {
        e.preventDefault()
        if(!form.nombre || !form.mail|| !form.telefono){
            alert("Todos los campos son obligatorios")
            return
        }
        addDoc(ordenesCollection,form).then(response=>{
            Swal.fire({
                title: '¡Gracias por tu compra!',
                 text: 'Tu pedido fue procesado correctamente, orden: '+ response.id,
                 icon: 'success',
                 confirmButtonText: 'OK'
            }).then((result)=>{
                if(result.isConfirmed){
                    window.location.href=  '/'
                }
            })
        })


        .catch(err=> console.err(err))
    }


  return (
    <div className='formulario'>
    <h2>Datos personales</h2>
    <form className='contacto' onSubmit={envioDeFormulario}>
        <input type="text" name='nombre' value={form.nombre} onChange={guardarCambio} placeholder='ingresa tu nombre' />
        <input type="number" name='telefono' value={form.telefono} onChange={guardarCambio} placeholder='ingresa tu telefono'/>
        <input type="email" name='mail' value={form.mail} onChange={guardarCambio} placeholder='ingresa tu mail'/>
        <button className='btn btn-secondary' type='submit' >Finalizar</button>
        
    </form>
  
    </div>
    
     
  )
}

export default FormBuy