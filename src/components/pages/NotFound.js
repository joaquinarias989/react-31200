import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-center">
      <h1>La página a la que intentas acceder no existe!</h1>
      <Link to={"/"} className="position-relative text-underlined mt-3">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
