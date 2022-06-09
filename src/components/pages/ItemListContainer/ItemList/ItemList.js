import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div className="products__list d-flex">
      {items.map((prod) => (
        <Item
          key={prod.id}
          title={prod.titulo}
          price={prod.precio}
          img={prod.img}
          stock={prod.stock}
          quantity={prod.cantidad}
        />
      ))}
    </div>
  );
}

export default ItemList;
