import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts} from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../service/firebase'


const ItemDetailContainer = ({cart,setCart}) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] =useState(false)
    const {id} = useParams()
    console.log('Hola soy itemDetailContainer')


    //FIREBASE
    useEffect(()=>{
      setLoading(true)
      //conectar con nuestra collection

      //const productCollection = collection(db, "perfumes")
      //crear una referencia
      //const docRef = doc(productCollection, id)

      //forma corta
      const docRef= doc(db, "perfumes", id) 
      //traer documento
      getDoc (docRef)
      .then((res)=> {
        if(res.data()){
          setProduct({id:res.id,...res.data()})
        }else{
          setInvalid(true)
        }  
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])
   


    //Usar la misma promesa que itemListConstainer
  
   // useEffect(()=>{
     //   setLoading(true)
      //  getProducts()
       // .then((res)=> setProduct(res.find((item)=> item.id === id)))
        //.catch((error)=> console.log(error))
        //.finally(()=> setLoading(false))
   // },[])

//crear una funcion que busque un item en particular

//useEffect(()=>{
  //  setLoading(true)
    //getOneProduct(id)
    //.then ((res=> setProduct(res)))
    //.catch((error)=> console.log(error))
    //.finally(()=>setLoading(false))
//},[])

if(invalid){
  return<div>
    <h2>Producto no existe</h2>
  </div>
}

  return (
    <div>
      {loading ? <LoaderComponent/>:<ItemDetail product={product} cart={cart} setCart={setCart}/>}
    </div>
  )
}

export default ItemDetailContainer
