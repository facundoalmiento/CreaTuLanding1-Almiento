import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="logocodegym" src="../src/assets/logo-codegym.png" alt="logo codegym" /> 
            <div className="nav-links">
                <a href="/">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contacto">Contacto</a>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
