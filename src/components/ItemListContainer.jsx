import { useEffect, useState } from "react"
import {getProducts, productos} from '../mock/asyncData'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db }  from '../service/firebase'
import LoaderComponent from "./LoaderComponent"



const ItemListContainer = ({greeting}) => {
const [data, setData]= useState([])
const [loading, setLoading] = useState(false)
const {categoryId} = useParams()


//Firebase

useEffect(()=> {
  setLoading(true)
  //conectamos con nuestra collection
  const productCollection = categoryId
  ? query(collection(db, "perfumes"), where("category","==", categoryId))
  :collection(db, "perfumes")
//pedir los documentos
getDocs(productCollection)
.then((res)=> {
//limpiar datos para uso
console.log(res.docs)
const list = res.docs.map((doc)=>{
  return{
id:doc.id,
...doc.data()
  }
})
console.log(list)
setData(list)
})
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[categoryId])


//const {greeting}= props
//console.log(props)
//let error = false
//let promiseExample = new Promise ((resolve, reject)=>{
   // setTimeout(()=>{
    //if(error){
      //  reject('No hay stock')
    //}else{
      //  resolve('Hap pizza')
    //}
//},3000)
//})
//console.log(promiseExample)
//useEffect(()=>{
  //  setLoading(true)
   // promiseExample
    //.then((res)=>{
      //  console.log(res, 'res')
        //setData(res)})
        //.finally(()=> setLoading(false))
//},[])

//Promesa de productos

//useEffect(()=>{
  //  setLoading(true)
    //getProducts()
    //.then((res)=>{
      //  if(categoryId){
            //filtrar
        //    setData(res.filter((item)=>item.category === categoryId))
        //}else{
          //  setData(res)
        //}
//})     
            
  //  .catch((error)=> console.log(error))
    //.finally(()=> setLoading(false))
//},[categoryId])

const subirData = () => {
  console.log('Hiciste click')
  const collectionToAdd = collection(db,"perfumes")
  productos.map((item)=> addDoc(collectionToAdd,item))
}
    console.log('Hola soy ItemListContainer')
      return (
        <main>
          <h1 className='text-success'>{greeting}</h1>
      
          {categoryId && (
            <h2 className="text-primary">
              {" "}
              <strong>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</strong>
            </h2>
          )}
      
          {loading ? <LoaderComponent/> : <ItemList data={data}/>}
        </main>
      )
      
        //<main>
        //<h1 className= 'text-success'>{greeting}</h1>
        {/*{data.map((item)=> <p key={item.id}>{item.name}</p>)}*/}
        {loading ? <LoaderComponent/> : <ItemList data={data}/>}
        {/*<button onClick={subirData}>Firebase UNA SOLA VEZ</button>*/}
        //</main>
    

}


export default ItemListContainer 