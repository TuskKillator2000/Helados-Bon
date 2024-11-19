import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from "./Footer";
import { Nosotros } from './Nosotros';
import { Registro } from "./Registro.js";
import { Home } from './Home';
import { CartProvider } from './CartContext'; // Importa el CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Registro" element={<Registro/>}/>
        </Routes>
        <Footer />
        {/* También puedes renderizar el componente Registro aquí */}
      </Router>
    </CartProvider>
  );
}

export default App;
