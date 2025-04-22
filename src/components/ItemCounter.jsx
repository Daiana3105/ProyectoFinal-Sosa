import React, { useState } from 'react'

const ItemCounter = ({ stock, onAdd }) => {

  const [count, setCount] = useState(1)

  const add = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-counter-container">
    <div className="item-counter-buttons">
      <button
        className="btn btn-danger"
        onClick={subtract}
        disabled={count <= 1 || stock === 0}
      >
        -
      </button>
      <span className="counter-number">{count}</span>
      <button
        className="btn btn-success"
        onClick={add}
        disabled={count >= stock || stock === 0}
      >
        +
      </button>
    </div>
  
    {stock === 0 ? (
      <div className="alert alert-danger fw-bold shadow-sm animate__animated animate__shakeX" role="alert">
        😢 ¡Este producto está sin stock por el momento!
      </div>
    ) : (
      <button
        className="btn btn-primary shadow"
        onClick={() => onAdd(count)}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    )}
  </div>
  
    );
  }
    

export default ItemCounter
