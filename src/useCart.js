import { useState } from 'react';

// Hook personalizado para el carrito de compras
export function useCart() {
  const [cart, setCart] = useState([]); // Estado que mantiene los productos en el carrito

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

  return { cart, addToCart, getTotal, getItemCount, resetCart };
}
