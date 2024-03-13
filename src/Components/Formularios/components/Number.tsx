import { Props } from "./SingleQuestion"
const Number = ({question, register}:Props) => {
  return (
    <div> 
        <b><label htmlFor={question.name} className="form-label">{question.title}</label></b>
        <input type={question.type}
        className="form-control m-1 shadow-sm p-1  bg-body rounded"
          name={question.name}
          id={question.name}
          required={question.required===false? false : true}
          max={question.max || ""}
          min={question.min || ""}
          step={question.step || ""}
          {...register(question.name)}
          placeholder={question.placeholder}
        />
      </div>
  )
}

export default Number
