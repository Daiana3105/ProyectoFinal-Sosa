import { createContext, useState, useContext, useEffect } from "react";

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// 3. Proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

  // Verifica si el producto ya está en el carrito
  const isInCart = (id) => cart.some((prod) => prod.id === id);

  // Agrega un producto al carrito
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Elimina un producto del carrito
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vacía todo el carrito
  const clear = () => {
    setCart([]);
  };

  // Total a pagar
  const cartTotal = () =>
    cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  // Cantidad total de productos
  const cartQuantity = () =>
    cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        cartTotal,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

