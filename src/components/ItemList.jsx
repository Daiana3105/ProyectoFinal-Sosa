import React from 'react'
import { data } from 'react-router-dom'
import Item from './Item'

const ItemList = ({ data }) => {  
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemList;
