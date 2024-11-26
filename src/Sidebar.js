import React from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai"; // Importamos los iconos de react-icons
import { useCart } from "./CartContext";
import "./styles/Sidebar.css";

export function Sidebar({ isOpen, closeSidebar }) {
  const { cart, getTotal, removeFromCart } = useCart();

  // Función para eliminar producto individualmente
  const handleRemoveItem = (itemName) => {
    removeFromCart(itemName);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
      <div className="sidebar-close" onClick={closeSidebar}>
        <AiOutlineClose size={30} color="#fff" /> {/* Ícono de cierre */}
      </div>
      <div className="cart-menu">
        <h3>Productos añadidos</h3>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name} - {item.quantity} x ${item.precio}</p>
                <p>Subtotal: ${item.subtotal.toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.name)} // Eliminar el producto
                >
                  <AiOutlineDelete size={20} color="#f44336" /> {/* Ícono de eliminar */}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar--footer">
        <div className="total--amount">
          <h5>Total</h5>
          <div className="cart-total">$ {getTotal().toFixed(2)}</div>
        </div>
        <button className="checkout-btn" onClick={() => alert("Gracias por tu compra. Tu pedido está siendo procesado.")}>
          Comprar
        </button>
      </div>
    </div>
  );
}
