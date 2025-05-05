import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router'
import Navbar from './components/navbar/navbar';
import Products from './components/products/Productos';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/context';
import CartDetail from './CartDetail/CartDetail';
import FormBuy from './FormBuy/FormBuy';
import { ToastContainer } from 'react-toastify';

//props: compartir del componente padre al componenet hijo
///spread opereator: desaparrame elementions de un objeto, los separa
//Destructuracion: nos permite obtener valores y guardarlo en variables

function App() {

  return (

    <ContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetail/>}/>
        <Route path= '/detalleCarrito' element={<CartDetail/>}/>
        <Route path= '/formularioDeCompra' element={<FormBuy/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ContextProvider>
    
  )
}

export default App
