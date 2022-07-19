import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartContextProvider } from "./context/cartContext";
import Categories from "./components/pages/Categories";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const pathsBgBricks = ["Inicio", "Ingresar", "Registrarse", "404"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <main
          className={
            pathname === "/" ||
            pathsBgBricks.some((path) => pathname.includes(path))
              ? "bg-bricks"
              : ""
          }
        >
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Productos" element={<ItemListContainer />} />
            <Route
              path="/Productos/Categorias/:category"
              element={<ItemListContainer />}
            />
            <Route path={"/Productos/:id"} element={<ItemDetailContainer />} />
            <Route path={"/Carrito"} element={<Cart />} />
            <Route path={"/Productos/Categorias"} element={<Categories />} />
            <Route index path="/Ingresar" element={<Login />} />
            <Route index path="/Registrarse" element={<Register />} />
            <Route path={"/404"} element={<NotFound />} replace />
            <Route path={"*"} element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
