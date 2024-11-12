import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from "@fortawesome/react-fontawesome";
export function Footer() {
  return (
    <>
      <footer className="footer-main">

      <FontAwesomeIcon icon={faThumbtack} /> <p>Calle Paseo de los Alguaciles #1, (Antigua Central)
        Santo Domingo, República Dominicana</p>

      </footer>
    </>
  );
}