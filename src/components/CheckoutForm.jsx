import React, { useState } from 'react'
import {useCart} from '../context/CartContext'
import { addDoc, collection, getDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'

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
    {
        orderId ? <div>
            <h2>Compra realizada!</h2>
            <h4>Su id es: {orderId}</h4>
        </div>
    :<div>
     <h1>Complete con sus datos</h1> 
     <form onSubmit={finalizarCompra}>
        <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre' onChange={buyerData}/>
        <input className='form-control' type="text" name='lastname' placeholder='Ingrese su apellido' onChange={buyerData}/>
        <input className='form-control' type="text" name='address' placeholder='Ingrese su direccion' onChange={buyerData}/>
        <input className='form-control' type="text" name='email' placeholder='Ingrese su correo' onChange={buyerData}/>
        <input className='form-control' type="text" name='emailConfirm' placeholder='Repita su correo' onChange={(e) => setValidateMail(e.target.value)}/>
        <button className='btn btn-success' type='submit'>Enviar</button>
     </form>
    </div>
}
    </>
  )
}

export default CheckoutForm

