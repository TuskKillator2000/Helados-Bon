import { AiFillEnvironment, AiFillPhone } from "react-icons/ai";
import "./styles/footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

export function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-main-content">
          <p>
            <AiFillEnvironment />
            Calle Paseo de los Alguaciles #1, (Antigua Central) Santo Domingo,
            República Dominicana
          </p>
          <p>
            <AiFillPhone />
            T. (809) 530-7901
          </p>

          
          <div className="footer-instagram-icons">
            
            <a
              href="https://www.instagram.com/heladosbonrd/?hl=en" 
              target="_blank"                  
              rel="noopener noreferrer"        
            >
              <FaInstagram />
            </a>
            
            
            <a
              href="https://www.facebook.com/HeladosBONRD"  
              target="_blank"                  
              rel="noopener noreferrer"        
            >
              <FaFacebookF />
            </a>

            
            <a
              href="https://x.com/BONHELADOS?mx=2"   
              target="_blank"                  
              rel="noopener noreferrer"        
            >
              <CiTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

