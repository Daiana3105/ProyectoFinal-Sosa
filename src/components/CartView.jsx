import React from 'react'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, cartTotal, clear } = useCart();

  return (
      <div className="container">
          <h2 className="my-4">Tu carrito</h2>
          {cart.length === 0 ? (
              <p>No hay productos en tu carrito.</p>
          ) : (
              <div className="row">
                  {cart.map((compra) => (
                      <div key={compra.id} className="col-12 col-md-6 col-lg-4 mb-4">
                          <CartItem compra={compra} />
                      </div>
                  ))}
              </div>
          )}

          {/* Total y botones de acción */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
              <span className="h4 mb-3 mb-md-0">Total a pagar: ${cartTotal()},00</span>
              <div className="d-flex flex-column flex-md-row gap-3">
                  <button 
                      className="btn btn-danger btn-sm" 
                      onClick={clear}
                  >
                      Borrar carrito
                  </button>
                  <Link 
                      className="btn btn-dark btn-sm" 
                      to='/'
                  >
                      Seguir comprando
                  </Link>
                  <Link 
                      className="btn btn-success btn-sm" 
                      to='/checkoutForm'
                  >
                      Terminar compra
                  </Link>
              </div>
          </div>
          <div style={{ height: '50px' }}></div>
      </div>
      
  );
};

export default CartView;

