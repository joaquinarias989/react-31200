import "./App.css";
import NavBar from "./components/shared/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <ItemListContainer greeting="Productos" />
        <ItemDetailContainer id={"RMPN"} />
      </main>
    </>
  );
}

export default App;
