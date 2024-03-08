import {  Props } from './SingleQuestion';

const SelectInputs = ({ question, register }: Props) => {
  return (
    <div>
      <label htmlFor={question.name} className='form-label'>{question.title}</label>
      <select className="form-control m-1 shadow-sm p-1  bg-body rounded"
        name={question.name}
        id={question.name}
        required={question.required===false? false : true}
        {...register(question.name)}
      >
        {question.options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputs
