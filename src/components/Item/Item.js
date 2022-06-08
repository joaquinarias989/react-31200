/* eslint-disable jsx-a11y/anchor-is-valid */
import ItemCount from "../ItemCount/ItemCount";

const addToCart = (e) => {
  const btn = e.target;
  const prod = btn.closest(".product__card__info");
  const quantity = prod.querySelector("#quantity").textContent;
  const prodTitle = prod.querySelector(".product__card__title").textContent;

  alert(`${prodTitle} (${quantity}) agregado exitosamente!`);
};

function Item(item) {
  return (
    <article className="product__card" key={item.id}>
      <a href="#">
        <div className="product__card__img">
          <img src={item.img} alt="" />
        </div>
        <div className="product__card__info">
          <h4 className="product__card__title">{item.title}</h4>
          <h4 className="product__card__price">$ {item.price}</h4>
          <div className="product__card__btn flex-column gap-3">
            <ItemCount
              stock={item.stock}
              initial={item.quantity}
              onAdd={addToCart}
            />
          </div>
        </div>
      </a>
    </article>
  );
}

export default Item;
