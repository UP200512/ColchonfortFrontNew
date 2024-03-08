import { Question } from "../Formulario";

  interface Props {
    question: Question;
    register: any; // Asegúrate de especificar el tipo correcto para register
  }

const Checkbox = ({ question, register }: Props) => {
    return (
        <div>
            <label  className="form-label">{question.title}</label>
            {question.options?.map((option:any, index: number) => (
                <div key={index}>
                    
                    <input
                        className="m-1 shadow-sm p-1  bg-body rounded"
                        type={question.type || ''}
                        name={question.name || ''}
                        // required={question.required===false? false : true}
                        id={question.name || ''}
                        {...register(question.name)}
                        placeholder={option}
                    />{option}
                </ div>


            ))}

        </div>
    )
}

export default Checkbox
