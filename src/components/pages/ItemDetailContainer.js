import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { getProds } from "../../firebase/querys";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProds(id)
      .then((resp) => {
        resp._document
          ? setProd({
              id: resp.id,
              quantity: 0,
              ...resp.data(),
            })
          : navigate("/404");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  return (
    <section className="product container" id="product">
      <div className="section__header">
        <h1 className="title-underlined">
          {loading ? "Cargando producto..." : prod.title}
        </h1>

        <ol className="breadcrumb">
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/Productos"}>Productos</NavLink>
          </li>
          <li>
            <NavLink to={"/Productos/Categorias"}>Categorias</NavLink>
          </li>
          <li>
            <NavLink to={`/Productos/Categorias/${prod.category}`}>
              {prod.category}
            </NavLink>
          </li>
          <li>{prod.title}</li>
        </ol>
      </div>
      {loading ? <Loading /> : <ItemDetail key={prod.id} item={prod} />}
    </section>
  );
};

export default ItemDetailContainer;
