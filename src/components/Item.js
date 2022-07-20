import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";
import { memo, useContext, useState } from "react";
import Swal from "sweetalert2";

const Item = memo(({ item }) => {
  const [sizeSelected, setSizeSelected] = useState(Array.prototype.indexOf());
  const { addToCart } = useContext(CartContext);
  const index = item.size.indexOf(sizeSelected);

  const onAdd = (quantity) => {
    if (index === -1) {
      return Swal.fire({
        icon: "error",
        title: "No seleccionaste el talle che!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
      });
    }
    addToCart(item, quantity, index);
  };

  return (
    <article className="product__card">
      {item.price < 3000 && <span className="offer">GANGA!</span>}
      <Link to={`/Productos/${item.id}`}>
        <div className="product__card__img">
          <img src={item.img} alt="Imagen del producto" loading="lazy" />
        </div>
        <div className="product__card__info">
          <h4 className="product__card__title">{item.title}</h4>
          <h4 className="product__card__price">$ {item.price}</h4>
        </div>
      </Link>

      <ItemCount
        stock={index > -1 ? item.stock[index] : 1}
        onAdd={onAdd}
        sizes={item.size}
        onChangeSize={setSizeSelected}
      />
    </article>
  );
});

export default Item;
