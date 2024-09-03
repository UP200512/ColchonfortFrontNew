import { Props } from "./SingleQuestion"
const Text = ({question, register}:Props) => {
  return (
    <div>
        <b><label htmlFor={question.name || ''} className="form-label" >{question.title || ''}</label></b>
        <input className="form-control m-1 shadow-sm p-1  bg-body rounded" type={question.type || ''}
        maxLength={question.max} 
          name={question.name || ''}
          defaultValue={question.value}
          required={question.required===false? false : true}
          id={question.id || ''}
          // placeholder={question.name?.toUpperCase()}
          {...register(question.name)}
          placeholder={question.placeholder}
        />
      </div>
  )
}

export default Text