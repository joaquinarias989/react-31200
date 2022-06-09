import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <ItemListContainer greeting="Productos"></ItemListContainer>
      </main>
    </>
  );
}

export default App;
