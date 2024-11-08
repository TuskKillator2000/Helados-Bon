import { Link } from 'react-router-dom';  // Importar Link de react-router-dom
import "./styles/header.css";
import LogoHeladosBon from './img/LogoHeladosBon.svg';

export function Header({ ready }) {
  return (
    <>
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
              <Link to="/" className={ready ? "active" : "noActive"}>
                Página principal
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="noActive">  {/* Apunta a /nosotros */}
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

