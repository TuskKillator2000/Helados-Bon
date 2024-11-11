 // Importar Link de react-router-dom
// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import LogoHeladosBon from './img/LogoHeladosBon.svg';

export function Header() {
  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>

        <div className="logo">
          <img src={LogoHeladosBon} alt="Logo Helados Bon" />
          <h1>Helados Bon</h1>
        </div>

        <ul>
          <li>
            <NavLink to="/">Página principal</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className="noActive">Sobre nosotros</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
