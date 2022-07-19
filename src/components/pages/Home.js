import { Link } from "react-router-dom";
import hanger from "../../img/hanger.svg";
import About from "../About";
import Contact from "../Contact";
import Help from "../Help";

const Home = () => {
  return (
    <>
      <section id="welcome" className="welcome">
        <Link type="button" className="btn-principal" to={"/Productos"}>
          <i className="fas fa-shopping-bag me-2"></i> Comprar ahora
        </Link>
      </section>

      <section id="categories" className="categories container">
        <div className="flex-row">
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <Link
              className="btn-secundario"
              type="button"
              to={"/Productos/Categorias/Abrigos"}
            >
              Abrigos
            </Link>
          </article>
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <Link
              className="btn-secundario"
              type="button"
              to={"/Productos/Categorias/Remeras"}
            >
              Remeras
            </Link>
          </article>
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <Link
              className="btn-secundario"
              type="button"
              to={"/Productos/Categorias/Pantalones"}
            >
              Pantalones
            </Link>
          </article>
        </div>
        <div className="d-flex justify-content-center gap-5 pt-5 mt-5">
          <Link to={"/Productos"} type="button" className="btn-principal">
            Ver todos los productos
          </Link>
          <Link
            to={"/Productos/Categorias"}
            type="button"
            className="btn-secundario"
          >
            Ver todas las categorias
          </Link>
        </div>
      </section>

      <Help />

      <About />

      <Contact />
    </>
  );
};

export default Home;
