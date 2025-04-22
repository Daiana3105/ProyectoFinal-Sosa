import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';




const Item = ({producto}) => {
  return (
    <div className='card' style={{width:'10rem',marginTop:15}}>
      
      <img className='card-img-top' src={producto.img} alt={producto.name}/>
    <div className='card-body'>
    <h5 className='card-title'>{producto.name}</h5>
    <p className='card-text'>${producto.price},00</p>
    <Link className='btn btn-dark' to={`/item/${producto.id}`}>Ver más</Link>
    </div>
    </div>
  )
}

export default Item
