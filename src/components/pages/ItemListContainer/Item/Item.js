/* eslint-disable jsx-a11y/anchor-is-valid */
import ItemCount from "../ItemCount/ItemCount";

function Item(item) {
  const onAdd = (counter) => {
    alert(`(${counter}) producto/s agregado/s exitosamente!`);
  };

  return (
    <article className="product__card">
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
              onAdd={onAdd}
            />
          </div>
        </div>
      </a>
    </article>
  );
}

export default Item;
