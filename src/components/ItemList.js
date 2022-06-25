import { memo } from "react";
import Item from "./Item";

const ItemList = memo(({ items }) => {
  return (
    <div className="products__list d-flex justify-content-evenly justify-content-md-start">
      {items.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
});

export default ItemList;
