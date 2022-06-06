import React, { useState } from "react";

const useCounter = (stock = 1, initial = 0) => {
  const [counter, setCounter] = useState(initial);

  const increase = () =>
    counter < stock ? setCounter(counter + 1) : setCounter(stock);
  const decrease = () =>
    counter >= initial ? setCounter(counter - 1) : setCounter(initial);
  const reset = () => setCounter(initial);

  return { counter, increase, decrease, reset };
};
function ItemCount({ stock, initial }) {
  const quantity = useCounter(stock, initial);

  return (
    <>
      <div className="d-flex w-100 jc-between mt-3">
        <button
          className="btn-principal py-1 w-25"
          onClick={quantity.increase}
          disabled={quantity.counter >= stock}
        >
          <i className="fas fa-plus"></i>
        </button>
        <span className="px-5 py-1">{quantity.counter}</span>
        <button
          className="btn-info bg-info bg-secondary py-1 w-25"
          onClick={quantity.decrease}
          disabled={quantity.counter <= initial}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>

      <div className="d-flex jc-between">
        <button
          className={
            quantity.counter === 0
              ? "d-none"
              : "btn-secundario bg-danger text-white w-25"
          }
          onClick={quantity.reset}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          className="btn-cart w-100"
          onClick={quantity.increase}
          disabled={quantity.counter >= stock}
        >
          Agregar al Carrito <i className="fas fa-shopping-bag"></i>
        </button>
      </div>
    </>
  );
}

export default ItemCount;