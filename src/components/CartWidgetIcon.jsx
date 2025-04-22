import { useCart } from "../context/CartContext"; // Asegúrate de tener el CartContext en la ruta correcta
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Badge } from "react-bootstrap";

const CartWidgetIcon = () => {
  // Usamos el contexto para obtener el carrito
  //const { cart } = useContext(CartContext);
   const {cart,cartQuantity} = useCart()

  // Calculamos el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <FaShoppingCart size={24} color="black" />
      { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  );
};

export default CartWidgetIcon;
