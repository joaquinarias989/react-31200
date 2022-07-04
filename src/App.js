import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartContextProvider } from "./context/cartContext";
import Categories from "./components/pages/Categories";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <main>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/Productos" element={<ItemListContainer />} />
              <Route
                path="/Productos/Categorias/:category"
                element={<ItemListContainer />}
              />
              <Route
                path={"/Productos/:id"}
                element={<ItemDetailContainer />}
              />
              <Route path={"/Carrito"} element={<Cart />} />
              <Route path={"/Productos/Categorias"} element={<Categories />} />
              <Route path={"/404"} element={<NotFound />} />
              <Route path={"*"} element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
