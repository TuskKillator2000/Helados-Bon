import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Cards } from "./Cards";
import { Nosotros } from "./components/Nosotros";  // Asegúrate de importar el componente Nosotros
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>  {/* Envuelve toda la aplicación en un Router */}
    <Header ready={true} />  {/* El Header se mantiene en todas las páginas */}
    
    {/* Define las rutas aquí */}
    <Routes>
      <Route path="/" element={<Slider />} />  {/* Página principal con el Slider */}
      <Route path="/nosotros" element={<Nosotros />} />  {/* Ruta para la página "Sobre Nosotros" */}
      <Route path="/cards" element={<Cards />} />  {/* Ruta para las Cards */}
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
