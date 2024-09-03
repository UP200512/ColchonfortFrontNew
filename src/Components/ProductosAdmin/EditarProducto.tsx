import FormularioEdit from "../Formularios/FormularioEdit";
import { NuevoArticulo } from "../Formularios/JsonForms/NuevoArticulo";
import { EditProduct } from "../../axios/http";
import { useState, useEffect } from "react";
import { getProducto } from "../../axios/http";
import { useParams } from 'react-router-dom';

function agregarValoresALista(preguntas: any, valores: any) {
    return preguntas.map((seccion: any) => {
      const preguntasConValores = seccion.questions.map((pregunta: any) => {
        if (pregunta.type === 'table' && pregunta.rows) {
          const rowsConValores = pregunta.rows.map((row: any) => {
            const valor = valores[row.id] || false;
            return {
              ...row,
              value: valor
            };
          });
          return {
            ...pregunta,
            rows: rowsConValores
          };
        } else {
          const valor = valores[pregunta.id] || "";
          return {
            ...pregunta,
            value: valor
          };
        }
      });
      return {
        ...seccion,
        questions: preguntasConValores
      };
    });
  }

function EditarProducto() {


    const { id } = useParams();
  const [preguntas, setPreguntas] = useState<any>();
  const [valores, setValores] = useState<any>();

  useEffect(() => {
    async function fetchPreguntas() {
      try {
        const Lista = await NuevoArticulo();
        const valor = await getProducto(id);
        setValores(valor);

        const preguntasConValores = agregarValoresALista(Lista, valor);
        setPreguntas(preguntasConValores);
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
          <FormularioEdit
            ListOfQuestions={preguntas}
            id={id}
            // initialValues={valores}
            actionSubmit={EditProduct}
            rutaOK="/productos/administrar/images/"
          />
        </div>
      </div>
    </div>
  );
}

export default EditarProducto;
