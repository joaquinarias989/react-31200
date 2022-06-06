import shirt from "../../img/shirt-yellow.webp";

import ItemCount from "../ItemCount/ItemCount";
const ItemListContainer = ({ greeting }) => {
  return (
    <section className="py-5">
      <h1 className="title-primary mb-5">{greeting}</h1>

      <article className="product__card">
        <a href>
          <div className="product__card__img">
            <img src={shirt} alt=""></img>
          </div>
          <div className="product__card__info">
            <h4 className="product__card__title">Producto de Ejemplo</h4>
            <h4 className="product__card__price">$ 2380</h4>
            <div className="product__card__btn flex-column gap-3">
              <ItemCount stock={5} initial={0} />
            </div>
          </div>
        </a>
      </article>
    </section>
  );
};

export default ItemListContainer;
