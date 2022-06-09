import { useEffect, useState } from "react";
import { fetchData } from "../../../helpers/fetchData";

const ItemDetailContainer = ({ id }) => {
  const [prod, setProd] = useState({});

  useEffect(() => {
    fetchData(id)
      .then((resp) => setProd(resp))
      .catch((err) => alert(err));
    //   .finally(() => setLoading(false));
  });

  return <div>{prod.titulo}</div>;
};

export default ItemDetailContainer;
