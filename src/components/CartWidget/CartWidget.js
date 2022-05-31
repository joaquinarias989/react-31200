const CartWidget = () => {
  return (
    <li className="cart-link">
      <a
        href="./assets/pages/cart.html"
        className="menu__link me-0"
        aria-label="Carrito de compras"
      >
        <i className="fas fa-shopping-bag text-white"></i>
      </a>
      <span className="cart-quantity"></span>
      <div className="cart__resume__nav">
        <div className="cart__resume__products flex-column">
          <div className="cart__product">
            <div className="cart__product__img">
              <img src="." alt="" />
            </div>
            <div className="cart__product__info">
              <h3 className="cart__product__title text-underlined">
                Nombre del Producto
              </h3>
              <p className="cart__product__details">Talle S, Amarillo</p>
              <div className="d-flex algn-items-center jc-between gap-1">
                <p>
                  Cantidad:
                  <span className="cart__product__quantity">2</span>
                </p>
                <div className="d-flex algn-items-center btn-group">
                  <button id="addOne" className="btn-principal">
                    <i className="fa fa-plus"></i>
                  </button>
                  <button id="reduceOne" className="btn-secundario d-none">
                    <i className="fa fa-minus"></i>
                  </button>
                  <button id="removeProd" className="btn-remove">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
              <h3 className="cart__product__price">$ 3000</h3>
            </div>
          </div>
          <div className="cart__product">
            <div className="cart__product__img">
              <img src="." alt="" />
            </div>
            <div className="cart__product__info">
              <h3 className="cart__product__title text-underlined">
                Nombre del Producto
              </h3>
              <p className="cart__product__details">Talle M, Negro</p>
              <div className="d-flex algn-items-center jc-between gap-1">
                <p>
                  Cantidad:
                  <span className="cart__product__quantity">1</span>
                </p>
                <div className="d-flex algn-items-center btn-group">
                  <button id="addOne" className="btn-principal">
                    <i className="fa fa-plus"></i>
                  </button>
                  <button id="reduceOne" className="btn-secundario d-none">
                    <i className="fa fa-minus"></i>
                  </button>
                  <button id="removeProd" className="btn-remove">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
              <h3 className="cart__product__price">$ 5750</h3>
            </div>
          </div>
        </div>
        <div className="cart__subtotal flex-column">
          <h4 className="flex-row jc-between algn-items-center">
            Subtotal <span id="subtotal">$ 11750</span>
          </h4>
          <h4 className="flex-row jc-between algn-items-center">
            Costo de Envío <span id="ship-cart">$ 475</span>
          </h4>
        </div>
        <div className="cart__total flex-row flex-wrap jc-between algn-items-center">
          <h2 className="position-relative text-overline">TOTAL</h2>
          <h2 className="position-relative text-overline" id="total">
            $ 12225
          </h2>
        </div>
      </div>
    </li>
  );
};

export default CartWidget;
