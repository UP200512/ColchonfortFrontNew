import { CiSaveUp2 } from "react-icons/ci";
// import { TutorFormData } from './JsonForms/TutorFormData';
import { useState } from 'react';
import SingleQuestion from "./components/SingleQuestion";

import { useForm } from 'react-hook-form';
export interface Question {
    type?: string;
    name?: string;
    title?: string;
    required?: boolean;
    equalTo?: string;
    options?: string[];
    filter?: boolean;
    min?: number;
    max?: number;
    hideField?: string;
    condition?: string;
    extra?: string;
    step?: number;
    rows?: Question[];
    sectionTitle?: string;
}

export interface Seccion {
    section?: string;
    validate?: number;
    target?: string[];
    questions?: Question[]
}
interface FormularioProps {
    ListOfQuestions: Seccion[]; // Asegúrate de importar el tipo Seccion y Question desde tu archivo types.ts
    
}


function Formulario({ ListOfQuestions }: FormularioProps,) {

    const [current, setCurrent] = useState(0);



    // const ListOfQuestions = TutorFormData();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => {
        // console.log(data);
        current == ListOfQuestions.length - 1 ? setCurrent(current) : setCurrent(current + 1)
    })
    // console.log([current])
    console.log(watch())

    if (ListOfQuestions && ListOfQuestions[current]) {
        return (
          <div className=' shadow p-3 mb-5 bg-body rounded'>
            <section>
              <h2>{ListOfQuestions[current].section}</h2>
              <form onSubmit={onSubmit}>
                {ListOfQuestions[current].questions?.map((question, index) => (
                  <div key={index}>
                    {(!('hideField' in question) || !question.condition) ||
                      ('hideField' in question && question.condition && watch(question.hideField) === question.condition) ? (
                      <div>
                        <SingleQuestion question={question} register={register} watch={watch} errors={errors} />
                      </div>
                    ) : null}
                  </div>
                ))}
                
              </form>
            </section>
            <div className="d-flex justify-content-end" ><button type="button"className="btn btn-primary m-2 " >Guardar <CiSaveUp2 /></button></div>
            
          </div>
        );
      } else {
        return <h1>No hay preguntas disponibles</h1>;
      }
}
export default Formulario;