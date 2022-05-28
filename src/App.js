import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="welcome" className="welcome">
          <a
            type="button"
            className="btn-principal"
            href="./assets/pages/products.html"
          >
            <i className="fas fa-shopping-bag me-2"></i> Comprar ahora
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
