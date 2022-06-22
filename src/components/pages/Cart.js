import { NavLink } from "react-router-dom";
import CartResume from "../CartResume";

const Cart = () => {
  const ship = 475;

  return (
    <section id="cart" className="cart container">
      <div className="section__header row">
        <div className="col-md-10">
          <h1 className="title-primary">Iniciar Compra</h1>

          <ol className="breadcrumb">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>Carrito</li>
          </ol>
        </div>
      </div>

      <div className="row justify-content-between w-100">
        <article className="cart__data col-md-6 flex-column">
          <div id="accordionData">
            <div className="cart__ship">
              <h2 className="text-leftline" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <span>Entrega</span>
                </button>
              </h2>

              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="flex-row jc-between algn-items-center mt-4">
                  <p>Correo Argentino - Envío a Domicilio</p>
                  <span className="text-overline px-3" id="ship-data">
                    $ {ship}
                  </span>
                </div>
              </div>
            </div>
            <form id="formPurchase" action="#">
              <div className="cart__personal mt-5">
                <h2
                  className="text-leftline mb-1"
                  id="panelsStayOpen-headingTwo"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <span>Datos del Destinatario</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <p className="text-end">
                    ¿Ya tenes cuenta?
                    <NavLink to="/Login" className="text-accent ms-2">
                      ¡Iniciá sesión!
                    </NavLink>
                  </p>
                  <input
                    type="text"
                    name="name"
                    className="form__input"
                    placeholder="Nombre y Apellido"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form__input"
                    placeholder="Email"
                    required
                  />
                  <div className="flex-row jc-between">
                    <input
                      type="number"
                      name="postalcode"
                      className="form__input"
                      placeholder="Cód. Postal"
                      required
                    />
                    <select
                      name="province"
                      className="form__input"
                      defaultValue={"Provincia"}
                      required
                    >
                      <option value={"Provincia"} disabled>
                        Provincia
                      </option>
                      <option value="cba">Córdoba</option>
                      <option value="bsas">Buenos Aires</option>
                      <option value="stafe">Santa Fe</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="address"
                    className="form__input"
                    placeholder="Domicilio"
                    required
                  />
                  <input
                    type="text"
                    name="department"
                    className="form__input"
                    placeholder="Departamento (opcional)"
                  />
                  <input
                    type="tel"
                    name="phone"
                    className="form__input"
                    placeholder="Télefono"
                    required
                  />
                </div>
              </div>
              <div className="cart__fact mt-5">
                <h2
                  className="text-leftline mb-4"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <span>Datos de Facturación</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <input
                    type="number"
                    name="dni"
                    className="form__input"
                    placeholder="DNI ó CUIL"
                    required
                  />
                  <div className="checkbox__box d-flex gap-2">
                    <input
                      type="checkbox"
                      name="check"
                      className="form-check-input"
                      id="check"
                    />
                    <label htmlFor="check">
                      Mis datos de facturación y entrega son los mismos
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn-principal mt-5 w-100"
                aria-label="Pagar"
              >
                <i className="fa fa-money-bill-alt"></i>
                Continuar al pago
              </button>
            </form>
          </div>
        </article>
        <article className="cart__resume ps-md-5 ps-xl-0 col-md-6 col-xl-4 flex-column">
          <CartResume type={"page"} />
        </article>
      </div>
    </section>
  );
};

export default Cart;
