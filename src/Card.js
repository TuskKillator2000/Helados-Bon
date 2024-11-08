import "./styles/card.css";
import {Cards} from "./Cards.js"

export function Card({image , name}) {
  return (
    
        <div className="card">
            <img src={image} alt="Producto 1" className="card-img"/>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">Descripción breve del producto. ¡Haz tu compra ahora!</p>
                <span className="price">$19.99</span>
                <button className="buy-btn">Comprar</button>
            </div>
        </div>
  )
}