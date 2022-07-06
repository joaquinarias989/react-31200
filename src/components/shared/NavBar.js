/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="bg-bricks">
      <nav className="navbar container d-flex navbar-expand-lg navbar-light">
        <NavLink to="/">
          <picture className="logo d-flex">
            <img
              src={logo}
              alt="Logo de la tienda StreetWear, en color blanco y amarillo"
              width="130"
            />
          </picture>
        </NavLink>

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
              <NavLink
                to="/Productos"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--active" : "menu__link"
                }
                role="button"
                aria-label="Cuenta de Usuario"
              >
                Productos
              </NavLink>
              <ul className="sub-menu sub-menu__categories bg-bricks">
                <li>
                  <NavLink
                    to="/Productos/Categorias/Remeras"
                    className={({ isActive }) =>
                      isActive ? "menu__link menu__link--active" : "menu__link"
                    }
                  >
                    Remeras
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Productos/Categorias/Abrigos"
                    className={({ isActive }) =>
                      isActive ? "menu__link menu__link--active" : "menu__link"
                    }
                  >
                    Abrigos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Productos/Categorias/"
                    className={({ isActive }) =>
                      isActive ? "menu__link menu__link--active" : "menu__link"
                    }
                  >
                    Ver todas las categorías
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/" className="menu__link">
                Ayuda
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="menu__link">
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="menu__link">
                Contacto
              </NavLink>
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
                  <NavLink
                    to="/Login"
                    className={({ isActive }) =>
                      isActive ? "menu__link menu__link--active" : "menu__link"
                    }
                  >
                    Ingresar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Register"
                    className={({ isActive }) =>
                      isActive ? "menu__link menu__link--active" : "menu__link"
                    }
                  >
                    Registrarse
                  </NavLink>
                </li>
              </ul>
            </li>
            <CartWidget />
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
