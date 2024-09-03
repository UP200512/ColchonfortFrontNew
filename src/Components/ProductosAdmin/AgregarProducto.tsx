
import Formulario from "../Formularios/Formulario";
import { NuevoArticulo } from "../Formularios/JsonForms/NuevoArticulo";
import { CreateProduct } from "../../axios/http";
import { useState, useEffect } from "react";

function AgregarProducto() {
    const [preguntas, setPreguntas] = useState<any>();

    useEffect(() => {
        async function fetchPreguntas() {
            try {
                const Lista = await NuevoArticulo();
                setPreguntas(Lista);
            } catch (error) {
                console.error('Error al obtener las preguntas:', error);
            }
        }

        fetchPreguntas();
    }, []);

    return (
        <div className="container mt-3 mb-2">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-3 mb-3 p-3 rounded">
                    <Formulario ListOfQuestions={preguntas} actionSubmit={CreateProduct} rutaOK="/productos/administrar/images/" />
                </div>
                {/* ... (optional second col) */}
            </div>
        </div>

    )
}

export default AgregarProducto
