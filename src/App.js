import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/Productos" element={<ItemListContainer />}></Route>
            <Route
              path="/Productos/Categorias/:category"
              element={<ItemListContainer />}
            ></Route>
            <Route
              path={"/Productos/:id"}
              element={<ItemDetailContainer />}
            ></Route>
            <Route path={"/Carrito"} element={<Cart />}></Route>
            <Route path={"*"} element={<Navigate to="/" />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
