  import { CiSaveUp2 } from "react-icons/ci";
  import SingleQuestion from "./components/SingleQuestion";
  import { useState } from "react";
  import { useForm } from 'react-hook-form';
  import cargando from '../../images/cargando.gif'

  export interface Question {
    type?: string;
    name?: string;
    title?: string;
    placeholder?: string;
    required?: boolean;
    equalTo?: string;
    options?: any;
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
    actionSubmit: Function;
  }



  function FormularioEdit({ ListOfQuestions, actionSubmit, id }: any,) {
    // const [categorias, setCategorias] = useState([]);
    const [isVisible, setIsVisible] = useState(false);


    const [current, setCurrent] = useState(0);



    // const ListOfQuestions = TutorFormData();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => {
      console.log(data);
      actionSubmit(data, id)
        .then((response: any) => {
          // console.log(response)
          if(!response){
            setIsVisible(true)
          }
          // Aquí puedes hacer algo con la respuesta si es necesario
        })
        .catch((error: any) => {
          console.error('Error al enviar el formulario:', error);
          setIsVisible(true)
        });
      // current == ListOfQuestions.length - 1 ? setCurrent(current) : setCurrent(current + 1)
    })
    // console.log([current])
    // console.log(watch())

    if (ListOfQuestions && ListOfQuestions[current]) {
      console.log(ListOfQuestions)
      return (
        <div className=' shadow p-3 mb-5 bg-body rounded' >
          {isVisible && (
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
              <use xlinkHref="#exclamation-triangle-fill"/>
            </svg>
            <div>
              An example danger alert with an icon
            </div>
          </div>
        )}
          <section>
            <i><h2 className="text-center mb-4">{ListOfQuestions[current].section}</h2></i>
            <form onSubmit={onSubmit}>
              {ListOfQuestions[current].questions?.map((question: any, index: any) => (
                <div key={index} className="m-2">
                  {(!('hideField' in question) || !question.condition) ||
                    ('hideField' in question && question.condition && watch(question.hideField) === question.condition) ? (
                    <div>
                      <SingleQuestion question={question} register={register} watch={watch} errors={errors} />
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="d-flex justify-content-end" ><button  type="submit" className="btn btn-dark m-2 " >Guardar <CiSaveUp2 /></button></div>
            </form>
          </section>


        </div>
      );
    } else {
      return (
        <div className="bg-color-dark" data-aos="fade-up"
          data-aos-duration="3000">
          <img src={cargando} alt="" />
        </div>
      )
    }
  }
  export default FormularioEdit;