import Formulario from "../Formularios/Formulario";
import { RegisterForm } from "../Formularios/JsonForms/RegisterForm";
import { CreateUser } from "../../axios/http";

function Register() {
  const ListOfQuestions = RegisterForm();

  return (
    <div className="container mt-3 mb-2">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 mt-3 mb-3 p-3 rounded" data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="linear">
          <Formulario ListOfQuestions={ListOfQuestions} actionSubmit={CreateUser} />
        </div>
      </div>
    </div>
  );
}

export default Register;
