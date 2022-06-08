import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const addToCart = (e) => {
  const btn = e.target;
  const prod = btn.closest(".product__card__info");
  const quantity = prod.querySelector("#quantity").textContent;
  const prodTitle = prod.querySelector(".product__card__title").textContent;

  alert(`${prodTitle} (${quantity}) agregado exitosamente!`);
};

function ItemList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("data/data.json"); //"https://api.mercadolibre.com/sites/MLA/search?q=remera"
      const data = await res.json();

      setProducts(data); //data.results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products__list d-flex">
      {products.map((prod) => (
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
      ))}
    </div>
  );
}

export default ItemList;
