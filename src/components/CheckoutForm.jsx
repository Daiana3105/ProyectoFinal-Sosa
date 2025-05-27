import React, { useState } from 'react'
import {useCart} from '../context/CartContext'
import { addDoc, collection, getDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'

import  {db}  from '../service/firebase'

const CheckoutForm = () => {
    const { cart, cartTotal, clear } = useCart()
    const [buyer, setBuyer]=useState({})
    const [validateMail, setValidateMail] = useState('')
    const [orderId, setOrderId] = useState('')

    const buyerData = (e)=>{
       // console.log(e, e.target, e.target.value, e.target.name)
      setBuyer(
        {
            ...buyer,
            [e.target.name]:e.target.value
        }
      )
    }

    const finalizarCompra = (e) =>{
        //no recargue la app
        e.preventDefault()
        //validar el form
        if(!buyer.name || !buyer.lastname || !buyer.email || !buyer.address){
            alert('Todos los campos son requeridos')
        }else if( buyer.email !== validateMail){
            alert('Los mails no son iguales')
        }else{
            console.log(e)
            let order = {
              comprador:buyer,
              compras:cart,
              total:cartTotal(),
              date:serverTimestamp()
            }
      
             const ventas = collection(db, "orders")
             //agregar un doc
             addDoc(ventas,order)
             .then((res)=> {
              //actualizar el stock
              cart.forEach((item)=>{
                const docRef = doc(db, "perfumes", item.id)
                //traer el doc
                getDoc(docRef)
                .then((dbDoc)=> {
                    updateDoc(docRef, {stock:dbDoc.data().stock - item.quantity})
                })
                .catch((error)=> console.log(error))
              })
              setOrderId(res.id)
              clear()
             })
             .catch((error)=> console.log(error))
        }
     
    }
  return (
    <>
  {orderId ? (
    <div className="text-center mt-5">
      style={{ paddingTop: '150px' }}
        <h2 style={{ color: '#333' }}>¡Compra realizada!</h2>
        <h4 style={{ color: '#555' }}>Su ID es: {orderId}</h4>
      <Link className="btn btn-dark btn-sm" to="/">
      Ir al inicio
    </Link>
    </div>
  ) : (
    <>
      <div className="checkout-header"style={{ paddingTop: '150px' }}>
        <h2>¡Casi listo para completar tu orden!</h2>
        <p>Revisá que los productos en tu carrito sean los correctos antes de finalizar.</p>
      </div>

      <div className="checkout-card"style={{ marginTop: '1rem' }}>
        <form className="checkout-form" onSubmit={finalizarCompra} autoComplete="off">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" placeholder="Nombre" onChange={buyerData} />
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" placeholder="Apellido" onChange={buyerData} />
          </div>
          <div>
            <label htmlFor="address">Dirección</label>
            <input type="text" name="address" placeholder="Dirección" onChange={buyerData} />
          </div>
          <div>
            <label htmlFor="phone">Número de Teléfono</label>
            <input type="text" name="phone" placeholder="Número" onChange={buyerData} />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" placeholder="Correo" onChange={buyerData} />
          </div>
          <div>
            <label htmlFor="emailConfirm">Confirmar correo electrónico</label>
            <input type="email" name="emailConfirm" placeholder="Confirmá tu correo" onChange={(e) => setValidateMail(e.target.value)} />
          </div>
          <div className="full-width">
            <label>
              <input type="checkbox" required /> Acepto los términos y condiciones
            </label>
          </div>

          <div className="full-width button-group">
            <button className="btn-yellow" type="submit">Completar Compra</button>
            <button className="btn-outline" type="button" onClick={clear}>Cancelar orden</button>
          </div>
        </form>
      </div>
    </>
  )}
</>

  )
}

export default CheckoutForm

