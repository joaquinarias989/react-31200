import { Link, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList";
import Loading from "../Loading";
import { CartContext } from "../../context/cartContext";
import { queryGetProds } from "../../firebase/querys";
import { getDocs } from "firebase/firestore";
import FilterProducts from "../FilterProducts";
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
            quantity: updateProdQuantity(item),
            ...item.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category]);

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
                <li>
                  <NavLink to="/Productos/Categorias"> Categorías</NavLink>
                </li>
                <li>{category}</li>
              </>
            ) : (
              <li>Productos</li>
            )}
          </ol>
        </div>
        <FilterProducts />
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
