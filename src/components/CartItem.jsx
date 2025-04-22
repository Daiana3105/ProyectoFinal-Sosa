import React from 'react'
import { useCart } from '../context/CartContext'


const CartItem = ({compra}) => {
    const { removeItem} = useCart()
    //const deleteItem = () =>{
    //    removeItem(Compra.id)
    //}
    console.log("compra:", compra);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={compra.img} className="img-fluid rounded-start" alt={compra.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{compra.name}</h5>
                        <div className="d-flex flex-column gap-2">
                            <span>Cantidad: {compra.quantity}</span>
                            <span>Precio unitario: ${compra.price},00</span>
                            <span>Precio final: ${compra.price * compra.quantity},00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem
