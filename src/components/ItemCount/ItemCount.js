import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const increase = () =>
    counter < stock ? setCounter(counter + 1) : setCounter(stock);

  const decrease = () =>
    counter >= initial ? setCounter(counter - 1) : setCounter(initial);

  const reset = () => setCounter(initial);

  return (
    <>
      <div className="d-flex w-100 jc-between mt-3">
        <button
          className="btn-principal py-1 w-25"
          onClick={increase}
          disabled={counter >= stock}
        >
          <i className="fas fa-plus"></i>
        </button>
        <span className="px-5 py-1" id="quantity">
          {counter}
        </span>
        <button
          className="btn-info bg-info bg-secondary py-1 w-25"
          onClick={decrease}
          disabled={counter <= initial}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>

      <div className="d-flex jc-between">
        <button
          className={
            counter === 0
              ? "d-none"
              : "btn-secundario bg-danger text-white w-25"
          }
          onClick={reset}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          className="btn-cart w-100 mt-3"
          onClick={() => onAdd(counter)}
          disabled={counter === 0}
        >
          Agregar al Carrito <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    </>
  );
}

export default ItemCount;
