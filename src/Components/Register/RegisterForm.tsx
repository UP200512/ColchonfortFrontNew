import Formulario from "../Formularios/Formulario";
import { RegisterForm } from "../Formularios/JsonForms/RegisterForm";

function Register() {
  const ListOfQuestions = RegisterForm();

  return (
    <div className="container mt-3 mb-2">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 mt-3 mb-3 p-3 rounded">
          <Formulario ListOfQuestions={ListOfQuestions} />
        </div>
      </div>
    </div>
  );
}

export default Register;