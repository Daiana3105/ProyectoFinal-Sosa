import React from 'react'
import { useCart} from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const {cart} = useCart()
  return (
    <div>
      {cart.length === 0 ? <EmptyCart /> : <CartView />}
    </div>
  )
}

export default Cart
