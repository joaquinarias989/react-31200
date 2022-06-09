import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const increase = () =>
    counter < stock ? setCounter(counter + 1) : setCounter(stock);

  const decrease = () =>
    counter >= initial ? setCounter(counter - 1) : setCounter(initial);

<<<<<<< HEAD:src/components/ItemCount/ItemCount.js
  const reset = () => setCounter(initial);

=======
>>>>>>> secondary:src/components/pages/ItemListContainer/ItemCount/ItemCount.js
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
<<<<<<< HEAD:src/components/ItemCount/ItemCount.js
          disabled={counter <= initial}
=======
          disabled={counter <= 0}
>>>>>>> secondary:src/components/pages/ItemListContainer/ItemCount/ItemCount.js
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>

      <div className="d-flex jc-between">
        <button
<<<<<<< HEAD:src/components/ItemCount/ItemCount.js
          className={
            counter === 0
              ? "d-none"
              : "btn-secundario bg-danger text-white w-25"
          }
=======
          className={counter === 0 ? "d-none" : "btn-remove text-white w-25"}
>>>>>>> secondary:src/components/pages/ItemListContainer/ItemCount/ItemCount.js
          onClick={reset}
        >
          <i className="fas fa-trash"></i>
        </button>
<<<<<<< HEAD:src/components/ItemCount/ItemCount.js
        <button
          className="btn-cart w-100 mt-3"
          onClick={() => onAdd(counter)}
          disabled={counter === 0}
        >
          Agregar al Carrito <i className="fas fa-cart-plus"></i>
        </button>
=======
        {
          <button
            className="btn-cart w-100 mt-3"
            onClick={() => onAdd(counter)}
            disabled={counter === 0}
          >
            Agregar al Carrito <i className="fas fa-cart-plus"></i>
          </button>
        }
>>>>>>> secondary:src/components/pages/ItemListContainer/ItemCount/ItemCount.js
      </div>
    </>
  );
}

export default ItemCount;
