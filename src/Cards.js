import { useState } from "react";
import { Card } from "./Card";
import Producto1 from "./img/Producto1.jpg";
import Producto2 from "./img/Producto2.jpg";
import Producto3 from "./img/Producto3.jpg";
import "./styles/card.css";
import { IoCartSharp } from "react-icons/io5";
import { useCart } from "./CartContext"; // Importamos el hook del contexto
import { Sidebar } from "./Sidebar"; // Importamos el Sidebar


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
  const { addToCart, getItemCount} = useCart(); // Usamos el hook del contexto
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para abrir/cerrar el sidebar

  // Función para abrir el sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Función para cerrar el sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Botón flotante de carrito */}
      <button className="useCart-toggle" onClick={openSidebar}>
        <IoCartSharp/> ({getItemCount()})
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

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
