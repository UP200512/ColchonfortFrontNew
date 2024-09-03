import {  Props } from './SingleQuestion';

const SelectInputs = ({ question, register }: Props) => {
  return (
    <div>
     <b><label htmlFor={question.name} className='form-label'>{question.title}</label></b> 
      <select className="form-control m-1 shadow-sm p-1  bg-body rounded"
        name={question.name}
        defaultValue={question.value}
        id={question.id}
        required={question.required===false? false : true}
        {...register(question.name)}
      >
        
        {question?.options?.map((option: any, index: number) => (
          
          <option key={index} value={option.idcategoria}>
            {option.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputs
