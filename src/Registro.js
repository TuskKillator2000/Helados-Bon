import React, { useState } from "react";
import { useCart } from "./CartContext";

export function Registro() {
  const { getTotal, cart } = useCart();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const total = getTotal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productos = cart.map((producto) => ({
      codigo_producto: producto.id, // Asegúrate que este campo sea correcto
      cantidad: 1, // La cantidad puede depender de tu lógica
      precio_producto: producto.precio,
    }));

    const datosRegistro = {
      nombre_cliente: nombre,
      correo_cliente: correo,
      total_compra: total,
      productos: productos,
    };

    console.log("Datos a enviar:", datosRegistro); // Revisión de los datos antes de enviarlos

    try {
      const response = await fetch("https://helados-bon.onrender.com/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosRegistro),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Error desconocido");
      }
      alert("Registro exitoso: Cliente ID " + result.cliente_id);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error al registrar: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" id="total">
              Total del Carrito: ${total}
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
