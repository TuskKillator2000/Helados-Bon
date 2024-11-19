import "./styles/card.css";

export function Card({ image, name, precio, addToCart }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">Descripción breve del producto. ¡Haz tu compra ahora!</p>
        <span className="price">${precio}</span>
        <button className="buy-btn" onClick={addToCart}>
          Comprar
        </button>
      </div>
    </div>
  );
}
