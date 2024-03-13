import SelectInputs from './SelectInputs'
import Number from './Number'
import Text from './Text'
import List from './List'
import Checkbox from './Checkbox'
import TableQuestion from './TableQuestion'
import EmailInput from './EmailInput'
import TextAreaInput from './TextAreaInput'
import Password from './Password'
import { Question } from '../Formulario'


export interface Props {
  question: Question;
  register: any; // Asegúrate de especificar el tipo correcto para register
  watch?: any; // Asegúrate de especificar el tipo correcto para watch
  errors?: any; // Asegúrate de especificar el tipo correcto para errors
}

function SingleQuestion({ question, register, watch, errors }:Props ) {
  // console.log(errors)
  switch (question.type) {
    case 'select': return <SelectInputs question={question} register={register} />
    case 'number': return <Number question={question} register={register} />
    case 'text': return <Text question={question} register={register} />
    case 'textarea': return <TextAreaInput question={question} register={register} />
    case 'list': return <List question={question} register={register} />
    case 'checkbox': return <Checkbox question={question} register={register} />
    case 'table': return <TableQuestion question={question} register={register} />
    case 'email': return <EmailInput question={question} register={register} errors={errors} watch={watch} />
    case 'password': return <Password question={question} register={register} />

    default: return (
      <div>
        <label htmlFor={question.name ? question.name : ''}>{question.title}</label>
        <input type={question.type || ''}
          name={question.name || ''}
          required={question.required === false ? false : true}
          {...register(question.name, {
            validate: (value:any) => {
              if (question.equalTo) {
                console.log(value === watch(question.equalTo) || "No coinciden")
                return value === watch(question.equalTo) || "No coinciden"
              }
            }

          }
          )}
        />
        {
          errors[question.name] && <span>{errors[question.name].message}</span>
        }
      </div>

    )

  }




}

export default SingleQuestion
