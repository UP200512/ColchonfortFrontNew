
import Formulario from "../Formularios/Formulario";
import { NuevoArticulo } from "../Formularios/JsonForms/NuevoArticulo";

function AgregarProducto() {
    const ListaPreguntas= NuevoArticulo();

    return (
        <div className="container mt-3 mb-2  ">
           
            <div className="row">
                <div className="col-md-6 mt-3 mb-3 p-3  rounded">
                <Formulario ListOfQuestions={ListaPreguntas} />
                </div>
                <div className="col-md-6 mt-3 mb-3 p-3  rounded">
                    {/* <h2>Imágenes</h2>
                    <div className="form-group">
                        <label htmlFor="imagen">Subir Imágenes:</label>
                        <input type="file" className="form-control-file" id="imagen" multiple />
                    </div>
                    <div className="form-group">
                        <label>Imágenes Subidas:</label>
                        
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="predeterminada"/>
                                <label className="form-check-label" htmlFor="predeterminada">Predeterminada</label>
                        </div>
                    </div> */}
                    


                </div>
            </div>
        </div>
    )
}

export default AgregarProducto
