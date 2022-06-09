import "./App.css";
import NavBar from "./components/shared/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

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
