function ForgotLogin() {
  return (
    <div
      className="shadow p-3 mb-5 bg-white rounded"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="d-flex justify-content-evenly">
        <a className="text-decoration-underline" href="">
          ¿Olvidaste tu contraseña?
        </a>
        <a className="text-decoration-underline" href="/registrate">
          ¿Aun no te has registrado?
        </a>
      </div>
    </div>
  );
}

export default ForgotLogin;
