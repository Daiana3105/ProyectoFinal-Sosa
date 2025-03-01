import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={24} color="black" />
      <span className="badge bg-danger">5</span> {/* Contador del carrito */}
    </div>
  );
};

export default CartWidget;
