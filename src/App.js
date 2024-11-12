// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from "./Footer";
import { Nosotros }from './Nosotros'; // Importa el componente de la página "Sobre nosotros"
import { Home } from './Home';   // Necesitas un componente para la página principal

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        {/* Define otras rutas aquí según sea necesario */}
      </Routes>
    </Router>

    <Footer/>
    </>

  );
}

export default App;

