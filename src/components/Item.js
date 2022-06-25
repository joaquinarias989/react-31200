import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";
import { memo, useContext } from "react";

const Item = memo(({ item }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(item, quantity);
  };

  return (
    <article className="product__card">
      <Link to={`/Productos/${item.id}`}>
        <div className="product__card__img">
          <img src={item.img} alt="" />
        </div>
        <div className="product__card__info">
          <h4 className="product__card__title">{item.title}</h4>
          <h4 className="product__card__price">$ {item.price}</h4>
        </div>
      </Link>
      <ItemCount stock={item.stock} initial={item.quantity} onAdd={onAdd} />
    </article>
  );
});

export default Item;
