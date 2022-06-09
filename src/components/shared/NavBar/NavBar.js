/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../../img/logo.svg";
import Cart from "../CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <header className="bg-bricks">
      <nav className="navbar container d-flex navbar-expand-lg navbar-light">
        <a href="#">
          <picture className="logo d-flex">
            <img
              src={logo}
              alt="Logo de la tienda StreetWear, en color blanco y amarillo"
              width="130"
            />
          </picture>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="btnMenu"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-lg-auto">
            <li className="dropdown-link">
              <a
                className="menu__link"
                href="."
                role="button"
                aria-label="Cuenta de Usuario"
              >
                Productos
              </a>
              <ul className="sub-menu bg-bricks">
                <li>
                  <a href="." className="menu__link">
                    Remeras
                  </a>
                </li>
                <li>
                  <a href="." className="menu__link">
                    Pantalones
                  </a>
                </li>
                <li>
                  <a href="." className="menu__link">
                    Abrigos
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#help" className="menu__link">
                Ayuda
              </a>
            </li>
            <li>
              <a href="#about" className="menu__link">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" className="menu__link">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="dropdown-link">
              <a
                className="menu__link"
                href="."
                role="button"
                aria-label="Cuenta de Usuario"
              >
                <i className="fas fa-user text-white"></i>
              </a>
              <ul className="sub-menu bg-bricks">
                <li>
                  <a href="." className="menu__link">
                    Ingresar
                  </a>
                </li>
                <li>
                  <a href="." className="menu__link">
                    Registrarse
                  </a>
                </li>
              </ul>
            </li>
            <Cart />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
