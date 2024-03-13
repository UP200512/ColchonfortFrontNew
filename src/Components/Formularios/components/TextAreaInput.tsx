import { Props } from "./SingleQuestion"

function TextAreaInput({question, register}:Props) {
  return (
    <div>
        <b><label htmlFor={question.name} className="form-label" >{question.title}</label></b>
        <textarea className="form-control m-1 shadow-sm p-1  bg-body rounded" type={question.type || ''}
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

export default TextAreaInput
