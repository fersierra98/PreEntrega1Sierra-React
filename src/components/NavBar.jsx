import "./styles.css/NavBar.css"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>INDUMENTARIA FS</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes Somos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <a href="/carrito">
            <CartWidget />
            </a>
        </nav>
    )
}

export default NavBar;