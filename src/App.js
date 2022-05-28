import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="welcome" class="welcome">
          <a
            type="button"
            class="btn-principal"
            href="./assets/pages/products.html"
          >
            <i class="fas fa-shopping-bag me-2"></i> Comprar ahora
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
