import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(Boolean);
  const { id } = useParams();
  const { updateProdQuantity } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const query = doc(db, "productos", id);
    getDoc(query)
      .then((resp) => {
        setProd({
          id: resp.id,
          quantity: updateProdQuantity(resp.id),
          ...resp.data(),
        });
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="product container">
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
