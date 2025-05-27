import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import NavbarComponent from './components/NavbarComponent'
import WithDataFetch from './hoc/WithDataFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage'
import CheckoutForm from './components/CheckoutForm'
import Cart from './components/Cart'
import Home from './components/Home'
import ChatBubble from './components/ChatBubble';
import Contacto from './components/Contacto'



function App(){

  
  //envolver el componente para el HOC
//const FetchWrapped = ItemListContainer(FetchHoc, 'http://hp-api.onrender.com/api/characters')
  
console.log('soy app')

return(

    <BrowserRouter>
    <CartProvider>
    <NavbarComponent/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path= '/category/:categoryId' element={<ItemListContainer greeting/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path ='/CheckoutForm' element={<CheckoutForm/>}/>
       <Route path= '*' element={<ErrorPage/>}/>
       <Route path="/item/:id" element={<ItemDetailContainer />} />
       <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <ChatBubble/>
    </CartProvider>
  </BrowserRouter>
  )
}

export default App