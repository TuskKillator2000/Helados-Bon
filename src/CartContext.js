import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.precio, 0);
  };

  // Función para obtener el número de productos en el carrito
  const getItemCount = () => {
    return cart.length;
  };

  // Función para reiniciar el carrito (eliminar todos los productos)
  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotal, getItemCount, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el contexto
export function useCart() {
  return useContext(CartContext);
}
