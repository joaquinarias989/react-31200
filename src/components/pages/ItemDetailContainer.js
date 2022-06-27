import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { getDoc } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";
import { queryGetProds } from "../../firebase/querys";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(Boolean);
  const { id } = useParams();
  const { updateProdQuantity } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getDoc(queryGetProds(id))
      .then((resp) => {
        setProd({
          id: resp.id,
          quantity: updateProdQuantity(resp.id),
          ...resp.data(),
        });
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [id, updateProdQuantity]);

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
          <li>{prod.title}</li>
        </ol>
      </div>
      {loading ? <Loading /> : <ItemDetail key={prod.id} item={prod} />}
    </section>
  );
};

export default ItemDetailContainer;
