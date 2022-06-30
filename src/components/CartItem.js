import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { addOne, reduceOne, removeProd } = useContext(CartContext);

  return (
    <div className="cart__product" key={item.id}>
      <div className="cart__product__img">
        <img src={item.img} alt="" />
        <button onClick={() => removeProd(item)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>

      <div className="cart__product__info">
        <h3 className="cart__product__title text-underlined">
          <Link to={`/Productos/${item.id}`}>{item.title}</Link>
        </h3>
        <p className="cart__product__details">
          {item.color}, {item.size}
        </p>
        <div className="d-flex algn-items-center jc-between gap-1">
          <p>
            Cantidad:
            <span className="cart__product__quantity px-2">
              {item.quantity}
            </span>
          </p>
          <div className="d-flex algn-items-center btn-group">
            <button
              id="addOne"
              className="btn-principal"
              onClick={() => addOne(item)}
            >
              <i className="fa fa-plus"></i>
            </button>
            <button
              id="reduceOne"
              className={item.quantity > 1 ? "btn-secundario" : "d-none"}
              onClick={() => reduceOne(item)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              id="removeProd"
              className={item.quantity === 1 ? "btn-remove" : "d-none"}
              onClick={() => removeProd(item)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <h3 className="cart__product__price">{item.price}</h3>
      </div>
    </div>
  );
};

export default CartItem;
