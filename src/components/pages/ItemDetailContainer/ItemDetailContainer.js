import { useEffect, useState } from "react";
import { fetchData } from "../../../helpers/fetchData";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(id)
      .then((resp) => setProd(resp))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  });

  return (
    <>
      {loading ? (
        <div className="dots-box">
          <div className="dots"></div>
        </div>
      ) : (
        <ItemDetail key={prod.id} item={prod} />
      )}
    </>
  );
};

export default ItemDetailContainer;
