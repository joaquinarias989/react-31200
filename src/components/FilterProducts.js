const FilterProducts = ({ filterProds }) => {
  return (
    <div className="col-md-2 d-flex justify-content-end align-items-start">
      <div className="btn-group">
        <button
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Filtrar productos"
        >
          <i className="fa fa-filter"></i>
        </button>
        <div className="dropdown-menu p-4">
          <h5 className="text-center mb-4">¿Qué estás buscando?</h5>
          <form onSubmit={(e) => filterProds(e)}>
            <input
              className="form__input mt-3"
              name="search"
              type="search"
              placeholder="Producto, Categoría, Color..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
