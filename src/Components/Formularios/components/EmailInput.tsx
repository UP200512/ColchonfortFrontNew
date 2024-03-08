import { Props } from './SingleQuestion'

const EmailInput = ({question, register, watch, errors}: Props) => {
  return (
    <div>
        <label htmlFor={question.name ? question.name : ''} className='form-label'>{question.title}</label>
        <input  
          className='form-control m-1 shadow-sm p-1  bg-body rounded'
          type={question.type || ''}
          name={question.name || ''}
          required={question.required === false ? false : true}
          {...register(question.name, {
            validate: (value:string) => {
              if (question.equalTo) {
                console.log(value === watch(question.equalTo) || "No coinciden")
                return value === watch(question.equalTo) || "No coinciden"
              }
            }

          }
          )}
        />
        {
          // errors[question.name] && <span>{errors[question.name].message}</span>
        }
      </div>
  )
}

export default EmailInput