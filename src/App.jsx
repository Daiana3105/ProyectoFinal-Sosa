import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'
import Contador from './ejemplos/Contador'


function App(){


  return(
    <>

    <NavbarComponent/>
    <ItemListContainer greeting='Bienvenidos'/>
    <Contador/>

    </>
   
  )
}

export default App