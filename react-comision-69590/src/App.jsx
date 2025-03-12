import './App.css';
import Navbar from './components/navbar/navbar';
import Products from './components/products/Productos';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//props: compartir del componente padre al componenet hijo
///spread opereator: desaparrame elementions de un objeto, los separa
//Destructuracion: nos permite obtener valores y guardarlo en variables

function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer greetings="Bienvenido a Zuge!"/>
    </>
    
  )
}

export default App
