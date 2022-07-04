import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container py-5">
      <h1>Categorías</h1>
      <div className="d-flex gap-4">
        <Link to={"/Productos/Categorias/Remeras"}>Remeras</Link>
        <Link to={"/Productos/Categorias/Abrigos"}>Abrigos</Link>
      </div>
    </div>
  );
};

export default Categories;
