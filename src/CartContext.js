import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        // Si el producto ya está en el carrito, aumentamos la cantidad
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.precio }
            : item
        );
      } else {
        // Si no está en el carrito, lo agregamos
        return [
          ...prevCart,
          { ...product, quantity: 1, subtotal: product.precio },
        ];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  // Función para calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.subtotal, 0);
  };

  // Función para obtener el número de productos en el carrito
  const getItemCount = () => {
    return cart.reduce((count, product) => count + product.quantity, 0);
  };

  // Función para reiniciar el carrito (eliminar todos los productos)
  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, getItemCount, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el contexto
export function useCart() {
  return useContext(CartContext);
}
