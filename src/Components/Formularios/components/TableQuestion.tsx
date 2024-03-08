import { Props } from './SingleQuestion'
import SingleQuestion from './SingleQuestion'

const TableQuestion = ({ question, register }: Props) => {
    return (
        <div>
            <h3>{question.title}</h3>

            <table>
                <tbody>
                    {question.rows?.map((row, index) => (
                        <tr key={index} >
                            
                            <td><SingleQuestion register={register} question={row} /></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default TableQuestion
