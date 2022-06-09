import { useEffect, useState } from "react";
import { fetchData } from "../../../helpers/fetchData";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-5" id="products">
      <h1 className="title-primary mb-5">{greeting}</h1>
      {loading ? (
        <div className="dots-box">
          <div className="dots"></div>
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </section>
  );
};

export default ItemListContainer;
