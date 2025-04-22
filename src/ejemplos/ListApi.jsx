import React from 'react'


const ListApi = ({characters}) => {
  return (
    <div>
      {characters.map((personaje)=> <CardApi key={personaje.id}/>)}
    </div>
  )
}

export default ListApi
