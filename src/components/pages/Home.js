import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import hanger from "../../img/hanger.svg";

const Home = () => {
  return (
    <>
      <section id="welcome" className="welcome">
        <Link type="button" className="btn-principal" to={"/Productos"}>
          <i className="fas fa-shopping-bag me-2"></i> Comprar ahora
        </Link>
      </section>

      <section id="categories" className="categories container">
        <div
          className="flex-row"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <a
              className="btn-secundario"
              type="button"
              href="./assets/pages/products.html"
            >
              Abrigos
            </a>
          </article>
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <a
              className="btn-secundario"
              type="button"
              href="./assets/pages/products.html"
            >
              Remeras
            </a>
          </article>
          <article className="flex-column">
            <img
              src={hanger}
              alt="Percha de madera clara"
              width="100%"
              height="100%"
            />
            <a
              className="btn-secundario"
              type="button"
              href="./assets/pages/products.html"
            >
              Pantalones
            </a>
          </article>
        </div>
        <div
          className="flex-row mt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            href="./assets/pages/products.html"
            type="button"
            className="btn-principal"
          >
            Ver todos los productos
          </a>
        </div>
      </section>

      <Help />

      <section id="about" className="about container">
        <div className="row align-items-center justify-content-between">
          <article
            className="about__content col-md-8 col-lg-7 d-flex flex-column align-items-start"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="title-primary">¿Quiénes Somos?</h2>
            <div className="accordion__paper ms-md-5" id="accordionExample">
              <div>
                <h3 id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="text-overline">Nosotros</span>
                  </button>
                </h3>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Diego Percaz y todo el equipo, de Arroyito Córdoba para todo
                    el mundo. En la constante búsqueda de{" "}
                    <strong>prendas únicas</strong> e increíbles.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h3 id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="text-overline">Inicios</span>
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Arrancamos con el objetivo de traer a nuestro pueblo,
                    prendas que no se conseguían accesiblemente, y de estilos
                    que no eran muy populares en la zona. Gracias a esto,
                    conocimos varios lugares del país y nos familiarizamos con
                    el mundo de la <strong>moda urbana</strong>.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h3 id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="text-overline">Actualidad</span>
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Ahora nuestros clientes objetivos no son sólo de nuestro
                    pueblo, sino que logramos una <strong>fidelidad</strong> con
                    amigos de todo el país. Como planes a futuro tenemos pensado
                    incursionar en el mundo del diseño y fabricación de prendas
                    propias.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <div
            className="about__icons col-md-3 col-lg-4 d-flex flex-md-column justify-content-center align-items-center flex-wrap"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={logo}
              alt="Logo de la tienda StreetWear en color blanco y amarillo"
              width="100%"
              height="100%"
            />
            <i className="fas fa-info"></i>
          </div>
        </div>
      </section>

      <section id="contact" className="contact container">
        <div className="row justify-content-between justify-content-center align-items-center">
          <article className="contact__form col-lg-6 d-flex justify-content-center align-items-center mb-5 mb-lg-0">
            <h2 className="title-primary vertical">Contactános</h2>
            <form
              id="formContact"
              action="https://formsubmit.co/aef81cd42c97cf0e3e57027a645cff68"
              method="POST"
              className="form__paper"
            >
              <div className="input__box">
                <label htmlFor="name" className="form__label">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form__input"
                  required
                />
              </div>
              <div className="input__box">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  required
                />
              </div>
              <div className="input__box">
                <label className="form__label">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  className="form__input"
                  rows="6"
                  column="10"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-principal">
                <i className="fa fa-paper-plane"></i> Enviar
              </button>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" id="subject" />
            </form>
          </article>

          <article className="contact__location col-lg-5 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <div className="iframe__container">
              <div className="iframe__box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024.4648465779292!2d-63.0508337415102!3d-31.421551452447495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94334dd9def7613f%3A0xda264072985ac5f3!2sRivadavia%20286%2C%20X2434%20Arroyito%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649901013386!5m2!1ses-419!2sar"
                  title="Ubicacion"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <span></span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;

const Help = () => {
  return (
    <section id="help" className="help container">
      <div className="row align-items-center justify-content-between flex-wrap-reverse">
        <div className="help__icons col-xl-3 d-flex flex-xl-column justify-content-center align-items-center flex-wrap">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-question"></i>
        </div>
        <article className="help__content col-xl-9 d-flex flex-column justify-content-end align-items-end">
          <h2 className="title-primary">¿Cómo compro?</h2>
          <div className="help__list">
            <div className="d-flex flex-column flex-sm-row">
              <span className="w-25">1</span>
              <p>
                Elegí el producto, el talle, y hacé click en Agregar al carrito.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <span className="w-25">2</span>
              <p>
                Si querés, podes seguir agregando otros productos al carrito,
                sino, hacé clic en Iniciar Compra. En este paso vas a poder
                calcular el costo de envío.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <span className="w-25">3</span>
              <p>
                Completá tus datos de contacto (y de facturación en caso de que
                lo requieras) y hacé clic en Continuar.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <span className="w-25">4</span>
              <p>
                Seleccioná el método de envío que desees (envíos a todo el país
                por Correo o A Coordinar), completá los datos del mismo y hacé
                clic en Continuar.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <span className="w-25">5</span>
              <p>
                Elegí el método de pago que prefieras (para Efectivo seleccioná
                Pago Fácil o Rapipago), rellená los datos solicitados para
                realizar la compra y hacé clic en Finalizar.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row my-3 my-sm-0">
              <span className="w-25">6</span>
              <p>
                ¡Listo! Revisá tu correo, en unos minutos va a llegar toda la
                información correspondiente a tu compra y el envío de la misma.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
