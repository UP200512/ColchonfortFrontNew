import { Props } from "./SingleQuestion"
const Password = ({question, register}:Props) => {
  return (
    <div>
        <label htmlFor={question.name || ''} className="form-label" >{question.title || ''}</label>
        <input className="form-control m-1 shadow-sm p-1  bg-body rounded" type={question.type || ''}
        maxLength={question.max} 
          name={question.name || ''}
          required={question.required===false? false : true}
          id={question.name || ''}
          // placeholder={question.name?.toUpperCase()}
          {...register(question.name)}
          placeholder={question.placeholder}
        />
      </div>
  )
}

export default Password