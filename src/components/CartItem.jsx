import React from 'react'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'

const CartItem = ({ compra }) => {
  const { removeItem } = useCart()

  if (!compra) return null // prevención de errores si el prop está vacío

  const handleRemoveItem = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Vas a eliminar "${compra.name}" del carrito.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(compra.id)
        Swal.fire({
          title: 'Eliminado',
          text: `"${compra.name}" fue eliminado del carrito.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        })
      }
    })
  }

  return (
    <div className="cart-item-container">
      <img
        src={compra.img}
        alt={compra.name}
        className="cart-item-img"
      />
      <div className="cart-item-body">
        <h5 className="cart-item-title">{compra.name}</h5>
        <div className="cart-item-info">
          <span>Cantidad: {compra.quantity}</span>
          <span>Precio unitario: ${compra.price},00</span>
          <span>Precio final: ${compra.price * compra.quantity},00</span>
        </div>
        <button
          className="btn btn-outline-danger small-delete-btn mt-2"
          onClick={handleRemoveItem}
        >
          Eliminar producto
        </button>
      </div>
    </div>
  

  
  )
}

export default CartItem
