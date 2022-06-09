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
        <div className="cart__resume__products flex-column"></div>
        <div className="cart__subtotal flex-column">
          <h4 className="flex-row jc-between algn-items-center">
            {/* Subtotal <span id="subtotal"></span> */}
          </h4>
        </div>
      </div>
    </li>
  );
};

export default CartWidget;
