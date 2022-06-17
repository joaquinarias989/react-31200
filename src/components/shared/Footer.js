import { NavLink } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-has-content */
const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info flex-column flex-md-row">
          <NavLink
            to="/"
            className="nav-icons"
            aria-label="Navegar a la página de Inicio"
          >
            <i className="fas fa-home"></i>
          </NavLink>

          <div className="footer__payment flex-column">
            <strong>Todos los métodos de pago</strong>
            <div className="icons flex-row">
              <i className="fa fa-credit-card"></i>
              <i className="fab fa-bitcoin"></i>
              <i className="fa fa-money-bill-alt"></i>
            </div>
          </div>
          <div className="footer__logo flex-column">
            <span>STREET</span>
            <span>WEAR</span>
          </div>
          <p>&copy; 2022 Derechos Reservados</p>

          <button
            onClick={scrollTop}
            aria-label="Ir al comienzo de la página"
            className="nav-icons"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>

        <div className="footer__social flex-row">
          <a
            href="https://www.facebook.com"
            className="fab fa-facebook"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/streetwear1__/"
            className="fab fa-instagram"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.twitter.com"
            className="fab fa-twitter"
            target="_blank"
            aria-label="Twitter"
            rel="noreferrer"
          ></a>
          <a
            href="."
            className="fa fa-share"
            target="_blank"
            aria-label="Compartir"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
