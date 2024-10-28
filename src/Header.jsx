import './styles/header.css'

export function Header() {
    return  <header>
    <div class="logo">
        <h1>Heladería Dulce Frío</h1>
    </div>
    <nav class="navbar">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nuestros Sabores</a></li>
            <li><a href="#">Promociones</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>gi
    
</header>

}