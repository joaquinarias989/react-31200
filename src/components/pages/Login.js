const Login = () => {
  return (
    <section id="login" className="login container">
      <h1 className="title-primary">Iniciar Sesión</h1>
      <div className="row justify-content-between mt-5">
        <div className="col-md-7 col-lg-6">
          <form className="form__paper" id="formLogin">
            <div className="input__box">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                required
              />
            </div>
            <div className="input__box">
              <label htmlFor="password" className="form__label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form__input"
                required
              />
            </div>
            <a
              href="#"
              className="text-accent d-block text-end"
              data-bs-toggle="modal"
              data-bs-target="#modalRecover"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <button type="submit" className="btn-principal">
              <i className="fa fa-sign-in-alt"></i> Iniciar sesión
            </button>
            <p>
              ¿No tenes cuenta?
              <a href="./register.html" className="text-accent">
                ¡Creála!
              </a>
            </p>
          </form>
        </div>
        <div className="icons col-md-3 d-flex flex-md-column justify-content-center align-items-center mt-5 mt-md-0">
          <i className="fa fa-user"></i>
          <i className="fas fa-hand-peace"></i>
        </div>
      </div>
    </section>
  );
};

export default Login;
