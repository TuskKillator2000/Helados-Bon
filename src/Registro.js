import { useCart } from "./CartContext"; // Importamos el hook del contexto

export function Registro() {
  const { getTotal } = useCart(); // Accede al total del carrito
    let total = getTotal()
  return (
    <>
      <div className="container" >
        <div className="card shadow-lg p-4" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Formulario de Registro</h2>
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="correo" required />
            </div>
            <div className="mb-3">
              <label htmlFor="totalCarrito" className="form-label" id="total">Total del Carrito: ${total}</label>
              
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Registrar</button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
