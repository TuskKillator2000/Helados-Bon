import "./styles/header.css";
import LogoHeladosBon from './img/LogoHeladosBon.svg';

export function Header({ ready }) {
  return (<> 
    <header>
      <nav>
        <input type="checkbox" id="check" />

        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>

        <div className="logo"> 
          <img src={LogoHeladosBon} alt="Logo Helados Bon" /> 
        </div>

        <ul>
          <li>
            <a className={ready ? "active" : "noActive"} href="#">
              Página principal
            </a>
          </li>
          <li>
            <a href="#" className="noActive">About</a>
          </li>
          <li>
            <a href="#" className="noActive">Services</a>
          </li>
          <li>
            <a href="#" className="noActive">Contact</a>
          </li>
          <li>
            <a href="#" className="noActive">Feedback</a>
          </li>
        </ul>
      </nav>

      <section></section>
    </header>
  </>
  );
}
