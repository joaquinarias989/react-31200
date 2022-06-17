import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section id="welcome" className="welcome">
      <Link type="button" className="btn-principal" to={"/Productos"}>
        <i className="fas fa-shopping-bag me-2"></i> Comprar ahora
      </Link>
    </section>
  );
};

export default Home;
