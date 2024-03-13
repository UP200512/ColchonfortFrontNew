import { Props } from "./SingleQuestion"
// import SingleQuestion from './SingleQuestion'

const List = ({ question, register }:Props) => {
    return (
        <fieldset className="form-control m-1 shadow-sm p-1  bg-body rounded">
            <legend><b>{question.title}</b></legend>
            {question.rows?.map((row, index) => (
                <div key={index}>
                    
                        <b><label htmlFor={row.name ||""} className="form-label">{row.title || ""}</label></b>
                        <input className="form-control m-1 shadow-sm p-1  bg-body rounded" name={row.name || "" } 
                        key={index} 
                        type={row.type || ""}
                        required={question.required===false? false : true}
                        min={0} max={question.max}
                        {...register(row.name)}
                        placeholder={question.placeholder}
                        />
                    
                    
                </div>

            ))}

        </fieldset>
    )
}

export default List
