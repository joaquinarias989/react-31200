import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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

  const ship = 475;
  let subtotalPrice = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  let totalPrice = subtotalPrice + ship;
  let totalQuantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  const addToCart = (item, quantity) => {
    if (item.quantity + quantity > item.stock) {
      return toast.error("No tenemos mas stock del producto");
    }
    if (cart.some((p) => p.id === item.id)) {
      const prod = cart.find((p) => p.id === item.id);
      item.quantity += quantity;
      prod.quantity += quantity;
      // prod.stock -= quantity;
      setCart([...cart]);
    } else {
      item.quantity = quantity;
      // item.stock -= quantity;
      setCart([...cart, item]);
    }
    toast.success(`${item.title} (${quantity}) agregado exitosamente!`);
  };

  const addOne = (item) => {
    if (!cart.includes(item))
      return toast.error("El producto no se encuentra en el carrito");
    if (item.quantity === item.stock)
      return toast.warning("No tenemos más stock del producto");

    item.quantity++;
    setCart([...cart]);
  };

  const reduceOne = (item) => {
    if (!cart.includes(item))
      return toast.error("El producto no se encuentra en el carrito");
    if (item.quantity === 0) removeProd(item);

    item.quantity--;
    setCart([...cart]);
  };

  const removeProd = (item) => {
    for (let c = 0; c < cart.length; c++) {
      cart[c] === item && cart.splice(c, 1);
    }
    item.quantity = 0;
    setCart([...cart]);
  };

  const clearCart = () => {
    if (cart.length < 0)
      return toast.error(`El carrito no posee ningún producto`);

    cart.forEach((prod) => (prod.quantity = 0));
    setCart([]);
  };

  const updateProdQuantity = (idProd) => {
    const prod = cart.find((p) => p.id === idProd);
    if (prod) {
      return prod.quantity;
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
