import { useState } from "react";
import { Card } from "./Card";
import Producto1 from "./img/Producto1.jpg";
import Producto2 from "./img/Producto2.jpg";
import Producto3 from "./img/Producto3.jpg";
import "./styles/card.css";
import { useCart } from "./CartContext"; // Importamos el hook del contexto

const cards = [
  {
    id: 1,
    name: "barquito abordado",
    image: Producto1,
    precio: 140,
    descripcion: "Un helado rico y delicioso para el calor",
  },
  {
    id: 2,
    name: "Helado Danes",
    image: Producto2,
    precio: 100,
    descripcion: "Un helado sencillo para comer de postre",
  },
  {
    id: 3,
    name: "Super Sundae",
    image: Producto3,
    precio: 110,
    descripcion: "Helado rico en sabores",
  },
];

export function Cards() {
  const { addToCart, getTotal, getItemCount, resetCart } = useCart(); // Usamos el hook del contexto

  const [showCartSummary, setShowCartSummary] = useState(false); // Estado para mostrar/ocultar resumen del carrito

  // Función para mostrar u ocultar el carrito
  const toggleCartSummary = () => {
    setShowCartSummary(!showCartSummary);
  };

  return (
    <>
      {/* Botón flotante de carrito */}
      <button className="useCart-toggle" onClick={toggleCartSummary}>
        Carrito ({getItemCount()})
      </button>
      {/* Resumen del carrito */}
      {showCartSummary && (
        <div className="cart-summary">
          <h3 className="card-title">Resumen del Carrito</h3>
          <p className="card-description">Total: ${getTotal()}</p>
          <p className="card-description">Productos en el carrito: {getItemCount()}</p>
          <button className="reset-btn" onClick={resetCart}>
            Reiniciar carrito
          </button>
        </div>
      )}
      <div className="container bg-light p-4 border border-white rounded-3">
        {cards.map((product) => (
          <div key={product.id}>
            <Card
              name={product.name}
              image={product.image}
              precio={product.precio}
              descripcion={product.descripcion}
              addToCart={() => addToCart(product)} // Pasamos la función al botón
            />
          </div>
        ))}
      </div>
    </>
  );
}
