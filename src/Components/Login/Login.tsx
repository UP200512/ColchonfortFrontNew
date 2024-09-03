import Formulario from "../Formularios/Formulario";
import { LoginForm } from "../Formularios/JsonForms/LoginForm";
import ForgotLogin from "./ForgotLogin";
import { Acceder } from "../../axios/http";

function Login() {
  const ListOfQuestions = LoginForm();
  










  return (
    <div className="container mt-3 mb-2">
      <div className="row d-flex justify-content-center">
        <div
          className="col-md-6 mt-3 mb-3 p-3 rounded"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Formulario ListOfQuestions={ListOfQuestions}  actionSubmit={Acceder} />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mt-3 mb-3 p-3 rounded">
            <ForgotLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
