import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import {
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const CartForm = () => {
  const [loading, setLoading] = useState(false);
  const { cart, ship, totalPrice, clearCart } = useContext(CartContext);
  const MySwal = withReactContent(Swal);

  const handlePurchase = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const db = getFirestore();
      const batch = writeBatch(db);

      const order = {
        buyer: {
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          codPostal: e.target.elements.postalcode.value,
          province: e.target.elements.province.value,
          address: e.target.elements.address.value,
          department: e.target.elements.department.value,
          phone: e.target.elements.phone.value,
          dni: e.target.elements.dni.value,
        },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          img: item.img,
          size: item.size,
          color: item.color,
        })),
        total: totalPrice,
        date: new Date(),
      };
      const orderCollection = collection(db, "orders");
      const orderRef = doc(orderCollection);
      const resOrder = batch.set(orderRef, order);
      const idOrder = resOrder._mutations[0].key.path.segments[1];
      //No hago addDoc porque eso agrega la orden directamente, y yo lo que quiero es guardarla en la transaccion hasta hacer el commit.
      //Ya que en caso de error en la parte de actualizar stock, la "transaccion" tiraría error y no se crearía ni la orden ni se actualizaría stock.

      const prodsCollection = collection(db, "productos");
      const q = await query(
        prodsCollection,
        where(
          documentId(),
          "in",
          cart.map((it) => it.id)
        )
      );
      await getDocs(q).then((resp) => {
        resp.docs.forEach((doc) =>
          batch.update(doc.ref, {
            stock:
              doc.data().stock -
              cart.find((item) => item.id === doc.id).quantity,
          })
        );
      });

      await batch.commit();

      clearCart();

      setLoading(false);

      return MySwal.fire({
        title: <h2>Compra realizada exitosamente!</h2>,
        html: (
          <>
            <strong>Cód. de Transaccion: </strong>
            <i>#{idOrder}</i>
            <p className="text-muted mt-1">
              (Te recomendamos guardar éste codigo ya que puede servirte ante
              cualquier inconveniente)
            </p>
          </>
        ),
        confirmButtonText: "Listo",
        icon: "success",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      return MySwal.fire({
        title: <h2>Algo salió mal</h2>,
        text: "Por favor, intenta nuevamente",
        icon: "error",
      });
    }
  };

  return (
    <>
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
              <span className="text-overline px-3">$ {ship}</span>
            </div>
          </div>
        </div>
        <form id="formPurchase" onSubmit={handlePurchase}>
          <div className="cart__personal mt-5">
            <h2 className="text-leftline mb-1" id="panelsStayOpen-headingTwo">
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
            <h2 className="text-leftline mb-4" id="panelsStayOpen-headingThree">
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
            {loading ? "Procesando compra..." : "Continuar al pago"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CartForm;
