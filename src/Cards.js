import { Card } from "./Card";
import Producto1 from "./img/Producto1.jpg";
import Producto3 from "./img/Producto2.jpg";
import Producto2 from "./img/Producto3.jpg";
import "./styles/card.css"

const cards = [
    {
        id: 1,
        name: "barquito abordado",
        image: Producto1,
        precio: 140,
        descripcion: "Un helado rico y delicioso para el calor"
    },
    
    {
        id: 2,
        name: "Helado Danes",
        image: Producto2,
        precio: 100,
        descripcion: "Un helado sencillo para comer de postre"
    },
    {
        id: 3,
        name: "Super Sundae",
        image: Producto3,
        precio: 110,
        descripcion: "Helado rico en sabores "
    }


]


export function Cards() {
  return (
    <>
      <div className="container bg-light p-4 border border-white rounded-3">
        {
            cards.map(cards =>(
                <div key={cards.id}>
                    
                    <Card name = {cards.name} image = {cards.image} precio = {cards.precio} descripcion = {cards.descripcion}/>

                </div>
                    
                    
            ))
        }
      </div>
    </>
  );
}
