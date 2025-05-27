import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({product}) => {
  const {addToCart} = useCart();
  const [ purchase, setPurchase] = useState(false)
  
 // const { addItem } = useContext(CartContext)
  //const [addedToCart, setAddedToCart] = useState(false)

  const onAdd = (quantity) => {
    addToCart(product, quantity)
    setPurchase(true)
  }
  console.log(product)
  return (
    <div className="item-detail-container"style={{ paddingTop: '160px' }}>
    <div className="item-detail-card">
      <h1>Detalle del producto: {product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>Stock: {product.stock} unidades</p>
      <p>Precio: ${product.price},00</p>
      {purchase 
        ? (
          <div className="item-buttons">
            <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
            <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
          </div>
        ) 
        : <ItemCounter stock={product.stock} onAdd={onAdd} />}
    </div>
  </div>
  )
}

export default ItemDetail
