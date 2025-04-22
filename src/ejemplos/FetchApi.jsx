//rafce
import React, {useState, useEffect} from 'react'
import ListApi from './ListApi'


const FetchApi = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState (null)
    useEffect(()=> {
        setLoading(true) //prendo el loader
        fetch('https//rickandmortyapi.com/api(character') //pedir los datos
        .then((res)=>res.json()) //lo traduzco
        .then((respuesta) =>setcharacters(respuesta.results))//lo guardo
        .catch((error)=> console.log(error)) //atrapo el error si existe
        .finally(()=> setLoading(false)) //apago el loader
    },[])
    
    if(error){
        return <h1>Hubo un error</h1>
    }


  return (
    <div>
       {loading ? <p>Cargando...</p> : <ListApi characters={characters}/>}
    </div>
  )
}

export default FetchApi




