import React from 'react'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const { cart, cartTotal, clear } = useCart()

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Borrar todo el carrito?',
      text: 'Se eliminarán todos los productos del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, borrar todo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
        Swal.fire({
          title: 'Carrito eliminado',
          text: 'Todos los productos fueron eliminados.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        })
      }
    })
  }

  return (
    <div className="container"style={{ paddingTop: '100px' }}>
      <h2 className="my-4">Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div className="row">
          {cart.map((compra, index) => (
           <div key={`${compra.id}-${index}`} className="col-12 col-md-6 col-lg-4 mb-4">
           <div className="d-flex justify-content-center">
             <CartItem compra={compra} />
           </div>
         </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-summary d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
            <span className="h4 mb-3 mb-md-0">
              Total a pagar: ${cartTotal()},00
            </span>
            <div className="d-flex flex-column flex-md-row gap-2 button-group">
              <button className="btn btn-danger btn-sm" onClick={handleClearCart}>
                Borrar carrito
              </button>
              <Link className="btn btn-dark btn-sm" to="/">
                Seguir comprando
              </Link>
              <Link className="btn btn-success btn-sm" to="/checkoutForm">
                Terminar compra
              </Link>
            </div>
          </div>
          <div style={{ height: '80px' }}></div>
        </>
      )}
    </div>
  )
}

export default CartView

