
import Formulario from "../Formularios/Formulario";
import { NuevoArticulo } from "../Formularios/JsonForms/NuevoArticulo";
import { CreateProduct } from "../../axios/http";

function AgregarProducto() {
    const ListaPreguntas = NuevoArticulo();

    return (
        <div className="container mt-3 mb-2">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-3 mb-3 p-3 rounded">
                    <Formulario ListOfQuestions={ListaPreguntas} actionSubmit={CreateProduct} />
                </div>
                {/* ... (optional second col) */}
            </div>
        </div>

    )
}

export default AgregarProducto
