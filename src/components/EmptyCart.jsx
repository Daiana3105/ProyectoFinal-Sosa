import React from 'react'
import { Link } from 'react-router-dom';


const EmptyCart = () => {
  return (
    <div style={{ paddingTop: '160px' }}>
      <h1>Tu carrito esta vacio</h1>
      <h3>Te invitamos a home para mas productos</h3>
      <Link to = '/' className= 'btn btn-dark'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart
