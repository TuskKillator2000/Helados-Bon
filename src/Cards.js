import { Card } from "./Card";
import Producto1 from "./img/Producto1.jpg";
import Producto3 from "./img/Producto2.jpg";
import Producto2 from "./img/Producto3.jpg";
import "./styles/card.css"

const cards = [
    {
        id: 1,
        name: "Producto1",
        image: Producto1
    },
    
    {
        id: 2,
        name: "Producto2",
        image: Producto2
    },
    {
        id: 3,
        name: "Producto3",
        image: Producto3
    }


]


export function Cards() {
  return (
    <>
      <div className="container">
        {
            cards.map(cards =>(
                <div key={cards.id}>
                    
                    <Card name = {cards.name} image = {cards.image}/>

                </div>
                    
                    
            ))
        }
      </div>
    </>
  );
}
