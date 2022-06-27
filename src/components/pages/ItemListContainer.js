import { Link, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList";
import Loading from "../Loading";
import { CartContext } from "../../context/cartContext";
import { queryGetProds } from "../../firebase/querys";
import { getDocs } from "firebase/firestore";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const { updateProdQuantity } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getDocs(queryGetProds(undefined, category))
      .then((data) =>
        setProducts(
          data.docs.map((item) => ({
            id: item.id,
            quantity: updateProdQuantity(item.id),
            ...item.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category, updateProdQuantity]);

  return (
    <section id="products" className="products container">
      <div className="section__header row">
        <div className="col-md-10">
          <h1 className="title-primary">Productos</h1>
          <ol className="breadcrumb">
            <li>
              <NavLink to={"/"}>Inicio</NavLink>
            </li>
            {category ? (
              <>
                <li>
                  <NavLink to="/Productos">Productos</NavLink>
                </li>
                <li>Categorías</li>
                <li>{category}</li>
              </>
            ) : (
              <li>Productos</li>
            )}
          </ol>
        </div>

        <div className="col-md-2 d-flex justify-content-end align-items-start">
          <div className="btn-group">
            <button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Filtrar productos"
            >
              <i className="fa fa-filter"></i>
            </button>
            <div className="dropdown-menu p-4">
              <h5 className="text-center mb-4">¿Qué estás buscando?</h5>
              <input
                className="form__input mt-3"
                type="search"
                placeholder="Producto, Categoría, Color..."
              />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : products.length === 0 ? (
        <div className="center-50">
          <h2>No tenemos {category} en stock por el momento.</h2>
          <Link
            to="/Productos"
            className="position-relative text-overline px-3 mt-2 fw-bold"
          >
            Ver todos los Productos
          </Link>
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </section>
  );
};

export default ItemListContainer;
