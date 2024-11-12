import "./styles/header.css"
import "./styles/nosotros.css"
import empresa from "./img/empresa.jpg"
export function Nosotros() {
  return (
    <>
  <div className="contenedor">


      <main className="container bg-white py-4 border-white rounded-3">
  <div className="row">
    {/* Imagen */}
    <div className="col-md-6 ">
      <img src={empresa} className="img-fluid rounded height"  alt="Empresa" />
    </div>

    {/* Línea vertical */}
    <div className="col-md-1 d-none d-md-block border-start border-dark"></div>

    {/* Texto */}
    <div className="col-md-5 d-flex flex-column">
      <h4 className="text-black mb-0">¿Quienes somos?</h4>
      <p className="text-black mt-2">Somos un exitoso modelo de desarrollo, que produce, transmite sabor y alegría para los dominicanos, convirtiéndonos en una de las marcas más queridas y prestigiosas del país.</p>

<p className='text-black mt-2'>Hoy más que en una empresa nos hemos convertido en parte de las familias dominicanas, creando y fortaleciendo un desarrollo sostenible de consolidación y liderazgo que genera valor compartido para nuestros asociados.</p>
    </div>
  </div>
</main>
  </div>

    </>
  );
}





