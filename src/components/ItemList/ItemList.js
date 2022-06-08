import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { fetchData } from "../../helpers/fetchData";

const addToCart = (e) => {
  const btn = e.target;
  const prod = btn.closest(".product__card__info");
  const quantity = prod.querySelector("#quantity").textContent;
  const prodTitle = prod.querySelector(".product__card__title").textContent;

  alert(`${prodTitle} (${quantity}) agregado exitosamente!`);
};

function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((resp) => setProducts(resp))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products__list d-flex">
      {loading ? (
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <div className="dots mt-5"></div>
        </div>
      ) : (
        products.map((prod) => (
          <article className="product__card" key={prod.id}>
            <a href="#">
              <div className="product__card__img">
                <img src="" alt="" />
              </div>
              <div className="product__card__info">
                <h4 className="product__card__title">{prod.nombre}</h4>
                <h4 className="product__card__price">$ {prod.precio}</h4>
                <div className="product__card__btn flex-column gap-3">
                  <ItemCount
                    stock={prod.stock}
                    initial={prod.cantidad}
                    onAdd={addToCart}
                  />
                </div>
              </div>
            </a>
          </article>
        ))
      )}
    </div>
  );
}

export default ItemList;
