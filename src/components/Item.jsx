import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';




const Item = ({producto}) => {
  return (
    <div className='card' style={{width:'10rem',marginTop:15}}>
      
      <img
  src={producto.img}
  className="card-img-top"
  style={{ width: 'auto',height: 'auto', objectFit: 'cover' }}
  alt={producto.nombre}
  />
<div className="card-body d-flex flex-column">
    <h5 className='card-title'>{producto.name}</h5>
    <p className='card-text'>${producto.price},00</p>
    <Link className='btn btn-dark' to={`/item/${producto.id}`}>Ver más</Link>
    </div>
    </div>
  )
}

export default Item
