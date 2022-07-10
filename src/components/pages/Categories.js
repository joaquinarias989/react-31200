import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../firebase/querys";
import Loading from "../Loading";

const Categories = () => {
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) =>
        setCategory(
          data.docs.map((c) => ({
            id: c.id,
            ...c.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container categories">
      <div className="section__header">
        <h1 className="title-primary">Categorías</h1>
        <ol className="breadcrumb">
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/Productos"}>Productos</NavLink>
          </li>
          <li>Categorias</li>
        </ol>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap justify-content-md-start justify-content-center gap-4 pt-3">
          {categories.map((category) => (
            <article className="product__card" key={category.id}>
              <Link to={`/Productos/Categorias/${category.name}`}>
                <div className="product__card__img">
                  <img src={category.img} alt="" />
                </div>
                <div className="product__card__info py-5">
                  <h4 className="product__card__title text-center">
                    {category.name}
                  </h4>
                  <p className="text-muted text-center pt-3">
                    {category.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
