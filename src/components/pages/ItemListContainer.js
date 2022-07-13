import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Loading from "../Loading";
import { getMoreProds, getProds } from "../../firebase/querys";
import FilterProducts from "../FilterProducts";
import Swal from "sweetalert2";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadButton, setLoadButton] = useState(false);
  const [lastDoc, setLastDoc] = useState();
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getProds(undefined, category)
      .then((data) => {
        setProducts(
          data.docs.map((item) => ({
            id: item.id,
            quantity: [0],
            ...item.data(),
          }))
        );
        setLastDoc(data.docs[data.docs.length - 1]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 2000,
    timerProgressBar: true,
  });
  const loadMore = () => {
    setLoadButton(true);
    getMoreProds(lastDoc, category)
      .then((data) => {
        if (data.size > 0) {
          setProducts([
            ...products,
            ...data.docs.map((item) => ({
              id: item.id,
              quantity: 0,
              ...item.data(),
            })),
          ]);
          setLastDoc(data.docs[data.docs.length - 1]);
        } else {
          Toast.fire({
            icon: "warning",
            title: `No quedan ${category ? category : "productos"} por cargar`,
          });
        }
      })
      .catch((err) => {
        setLoadButton(false);
        return Swal.fire({
          title: "Algo salió mal",
          text: "Por favor, intenta nuevamente",
          icon: "error",
        });
      })
      .finally(() => setLoadButton(false));
  };

  const filterProds = (e) => {
    e.preventDefault();
    let query = e.target.elements.search.value.trim().toLowerCase();
    if (query.length > 0) {
      const filteredProds = products.filter((prod) =>
        prod.title.trim().toLowerCase().includes(query)
      );
      setProducts(filteredProds);
    } else {
      getProds(undefined, category).then((data) => {
        setProducts(
          data.docs.map((item) => ({
            id: item.id,
            quantity: 0,
            ...item.data(),
          }))
        );
        setLastDoc(data.docs[data.docs.length - 1]);
      });
    }
  };

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
        <FilterProducts filterProds={filterProds} />
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
        <>
          <ItemList items={products} />
          <div className="flex-row jc-center algn-items-center">
            {loadButton ? (
              <button className="btn-principal" aria-label="Cargando" disabled>
                <i className="fa-solid fa-spinner"></i> Cargando
              </button>
            ) : (
              <button
                className="btn-principal"
                onClick={loadMore}
                aria-label="Cargar más productos"
              >
                <i className="fas fa-plus"></i> Cargar más
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ItemListContainer;
