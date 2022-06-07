import shirt from "../../img/shirt-yellow.webp";
import hoodie from "../../img/buzo-2.webp";

import ItemCount from "../ItemCount/ItemCount";

const addToCart = (e) => {
  const btn = e.target;
  const prod = btn.closest(".product__card__info");
  const quantity = prod.querySelector("#quantity").textContent;
  const prodTitle = prod.querySelector(".product__card__title").textContent;

  alert(`${prodTitle} (${quantity}) agregado exitosamente!`);
};

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="py-5" id="products">
      <h1 className="title-primary mb-5">{greeting}</h1>

      <div className="products__list d-flex">
        <article className="product__card">
          <a href="#">
            <div className="product__card__img">
              <img src={shirt} alt=""></img>
            </div>
            <div className="product__card__info">
              <h4 className="product__card__title">Remera Phenomenally</h4>
              <h4 className="product__card__price">$ 2380</h4>
              <div className="product__card__btn flex-column gap-3">
                <ItemCount stock={5} initial={0} onAdd={addToCart} />
              </div>
            </div>
          </a>
        </article>
        <article className="product__card">
          <a href="#">
            <div className="product__card__img">
              <img src={hoodie} alt=""></img>
            </div>
            <div className="product__card__info">
              <h4 className="product__card__title">Buzo Rose</h4>
              <h4 className="product__card__price">$ 5700</h4>
              <div className="product__card__btn flex-column gap-3">
                <ItemCount stock={3} initial={0} onAdd={addToCart} />
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default ItemListContainer;
