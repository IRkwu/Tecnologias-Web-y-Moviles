import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    countProducts();
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      
      return setCart(updatedCart);
    }
    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const countProducts = (product) => {
    setCount(counter => counter + 1);
  }

  const removeProductCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setCount(counter => counter - product.quantity);
  }

  const addFromCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    countProducts();
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      
      setCart(updatedCart);
    }
  }

  const removeFromCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    countProducts();
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity -= 1;

      if (updatedCart[existingProductIndex].quantity > 0) {
        setCart(updatedCart);
      } else {
        setCart(cart.filter((item) => item.id !== product.id));
      }
      setCount(counter => counter - 2); //Solución fea pero sirve xDD
    }
  }

  const clearCart = () => {
    setCount(counter => counter = 0);
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeProductCart, count, addFromCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}