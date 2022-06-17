import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increase = () =>
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  const decrease = () =>
    quantity >= initial ? setQuantity(quantity - 1) : setQuantity(initial);
  // const reset = () => setQuantity(initial);

  return (
    <>
      <div className="product__card__btn">
        <div className="product__quantity">
          <div className="btn-column">
            <button
              className="btn-principal"
              onClick={increase}
              disabled={quantity >= stock}
            >
              <i className="fas fa-plus"></i>
            </button>

            <button
              className="btn-secundario"
              onClick={decrease}
              disabled={quantity <= 0}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <span id="quantity" className="text-underlined">
            {quantity}
          </span>
        </div>
        <button
          className="btn-cart"
          onClick={() => onAdd(quantity)}
          disabled={quantity === 0}
        >
          Agregar al Carrito <i className="fas fa-cart-plus"></i>
        </button>
        {/* <button
          className={quantity === 0 ? "d-none" : "btn-remove text-white"}
          onClick={reset}
        >
          <i className="fas fa-trash"></i>
        </button> */}
      </div>
    </>
  );
}

export default ItemCount;
