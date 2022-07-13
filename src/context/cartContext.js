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
  let subtotalPrice = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  let totalPrice = subtotalPrice + ship;
  let totalQuantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  const addToCart = (item, quantity, sizeSelected) => {
    if (quantity > item.stock[sizeSelected])
      return Toast.fire({
        icon: "error",
        title:
          item.stock[sizeSelected] > 1
            ? `Sólo nos quedan ${item.stock[sizeSelected]} unidad/es en talle ${item.size[sizeSelected]}`
            : `Sólo nos queda 1 unidad en talle ${item.size[sizeSelected]}`,
        timer: 3000,
      });

    //if prod exist in cart
    const prod = cart.find((p) => p.id === item.id);
    if (prod) {
      if (prod.quantity[sizeSelected] + quantity > item.stock[sizeSelected]) {
        return Toast.fire({
          icon: "error",
          title: "No tenemos más stock del producto",
        });
      }
      prod.quantity[sizeSelected] += quantity;
      item.quantity[sizeSelected] = prod.quantity[sizeSelected];
      setCart([...cart]);
    } else {
      //if prod not exist in cart
      //fill item.quantity array whit 0s when item is added to cart for first time
      for (let i = 0; i < item.size.length; i++) {
        item.quantity[i] = 0;
      }
      item.quantity[sizeSelected] = quantity;
      setCart([...cart, item]);
    }

    console.log(prod);
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

  const removeProd = (item, itemsOutStock, index) => {
    if (item) {
      if (index !== -1) {
        item.quantity[index] = 0;
        return setCart([...cart]);
      }
      console.log("hola");
      return setCart(cart.filter((p) => p.id !== item.id));
    }

    for (const itemOutStock of itemsOutStock) {
      const prodDelete = cart.find((p) => p.id === itemOutStock.id);
      for (let c = 0; c < cart.length; c++) {
        cart[c] === prodDelete && cart.splice(c, 1);
        itemOutStock.quantity && (itemOutStock.quantity = 0);
      }
    }
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
