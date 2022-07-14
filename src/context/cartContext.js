import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.getItem("cart") &&
      setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 2000,
    timerProgressBar: true,
  });

  const ship = 475;

  //calculate total quantity of products in cart
  let totalQuantity = cart
    .map((item) => item.quantity.reduce((acc, cur) => acc + cur, 0))
    .reduce((acc, cur) => acc + cur, 0);

  //calculate subtotal price of products in cart
  let subtotalPrice = cart
    .map(
      (item) => item.price * item.quantity.reduce((acc, cur) => acc + cur, 0)
    )
    .reduce((acc, cur) => acc + cur, 0);

  //calculate total price
  let totalPrice = subtotalPrice + ship;

  const addToCart = (item, quantity, index) => {
    if (quantity > item.stock[index])
      return Toast.fire({
        icon: "error",
        title:
          item.stock[index] > 1
            ? `Sólo nos quedan ${item.stock[index]} unidad/es en talle ${item.size[index]}`
            : `Sólo nos queda 1 unidad en talle ${item.size[index]}`,
        timer: 3000,
      });

    //if prod exist in cart
    const prod = cart.find((p) => p.id === item.id);
    if (prod) {
      if (prod.quantity[index] + quantity > item.stock[index]) {
        return Toast.fire({
          icon: "error",
          title: `No tenemos más stock del producto en talle ${item.size[index]}`,
        });
      }
      prod.quantity[index] += quantity;
      item.quantity[index] = prod.quantity[index];
      setCart([...cart]);
    } else {
      //if prod not exist in cart
      //fill item.quantity array whit 0s when item is added to cart for first time
      for (let i = 0; i < item.size.length; i++) {
        item.quantity[i] = 0;
      }
      item.quantity[index] = quantity;
      setCart([...cart, item]);
    }

    return Toast.fire({
      icon: "success",
      title: `${item.title} (${quantity}) agregado exitosamente!`,
    });
  };

  const addOne = (item, index) => {
    if (!cart.some((p) => p.id === item.id))
      return Toast.fire({
        icon: "error",
        title: `El producto no se encuentra en el carrito`,
      });
    if (item.quantity[index] >= item.stock[index])
      return Toast.fire({
        icon: "error",
        title: `No tenemos más stock del producto en talle ${item.size[index]}`,
      });

    item.quantity[index]++;
    setCart([...cart]);
  };

  const reduceOne = (item, index) => {
    if (!cart.includes(item))
      return Toast.fire({
        icon: "error",
        title: `El producto no se encuentra en el carrito`,
      });
    if (item.quantity[index] === 0) return (item.quantity[index] = 0);

    item.quantity[index]--;
    setCart([...cart]);
  };

  const removeProd = (item, index) => {
    if (item.quantity.reduce((acc, cur) => acc + cur, -1) === 0)
      return setCart(cart.filter((p) => p.id !== item.id));
    if (index !== -1 && index !== undefined) {
      item.quantity[index] = 0;
      return setCart([...cart]);
    }
    return setCart(cart.filter((p) => p.id !== item.id));
  };

  const removeProdsOutStock = (itemsOutStock) => {
    cart.forEach((item) => {
      itemsOutStock.forEach((itemOutStock) => {
        if (item.id === itemOutStock.id) item.quantity[itemOutStock.index] = 0;
      });
      if (item.quantity.reduce((acc, cur) => acc + cur, 0) === 0) {
        cart.splice(cart.indexOf(item), 1);
      }
    });
    setCart([...cart]);
  };

  const clearCart = () => {
    if (cart.length < 0)
      return Toast.fire({
        icon: "error",
        title: `El carrito no posee ningún producto`,
      });

    cart.forEach((prod) => (prod.quantity = 0));
    setCart([]);
  };

  const updateProdQuantity = (item) => {
    if (cart.some((p) => p.id === item.id)) {
      const prod = cart.find((p) => p.id === item.id);
      if (prod) {
        return prod.quantity;
      }
    }
    return 0;
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        addOne,
        reduceOne,
        removeProd,
        removeProdsOutStock,
        clearCart,
        updateProdQuantity,
        cart,
        ship,
        subtotalPrice,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
