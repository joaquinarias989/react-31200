import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ListProducts from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="d-flex justify-content-center align-items-center">
        <ListProducts greeting="Bienvenido a la sección de productos"></ListProducts>
      </main>
    </>
  );
}

export default App;
