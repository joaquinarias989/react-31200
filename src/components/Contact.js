const Contact = () => {
  return (
    <section id="contact" className="contact container">
      <div className="row justify-content-between justify-content-center align-items-center">
        <article className="contact__form col-lg-6 d-flex justify-content-center align-items-center mb-5 mb-lg-0">
          <h2 className="title-primary vertical">Contactános</h2>
          <form
            id="formContact"
            action="https://formsubmit.co/aef81cd42c97cf0e3e57027a645cff68"
            method="POST"
            className="form__paper"
          >
            <div className="input__box">
              <label htmlFor="name" className="form__label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form__input"
                required
              />
            </div>
            <div className="input__box">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form__input"
                required
              />
            </div>
            <div className="input__box">
              <label className="form__label">Mensaje</label>
              <textarea
                name="message"
                id="message"
                className="form__input"
                rows="6"
                column="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-principal">
              <i className="fa fa-paper-plane"></i> Enviar
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_subject" id="subject" />
          </form>
        </article>

        <article className="contact__location col-lg-5 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
          <div className="iframe__container">
            <div className="iframe__box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024.4648465779292!2d-63.0508337415102!3d-31.421551452447495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94334dd9def7613f%3A0xda264072985ac5f3!2sRivadavia%20286%2C%20X2434%20Arroyito%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649901013386!5m2!1ses-419!2sar"
                title="Ubicacion"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <span></span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
