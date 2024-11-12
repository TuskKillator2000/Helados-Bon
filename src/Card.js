import "./styles/card.css";


export function Card({image , name, precio}) {
  return (
    
        <div className="card">
            <img src={image} alt="Producto 1" className="card-img"/>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">Descripción breve del producto. ¡Haz tu compra ahora!</p>
                <span className="price">$ {precio}</span>
                <button className="buy-btn">Comprar</button>
            </div>
        </div>
  )
}