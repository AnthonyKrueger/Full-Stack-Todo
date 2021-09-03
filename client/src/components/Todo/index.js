import {useQuery, useMutation} from '@apollo/client'
import {COMPLETE_TODO, DELETE_TODO} from "../../utils/mutations"
import { GET_ALL_TODOS } from '../../utils/queries'

export default function Todo({completed, name, id}) {

    const [completeTodo, { compError }] = useMutation(COMPLETE_TODO);
    const [deleteTodo, { delError }] = useMutation(DELETE_TODO);

    async function compTodo() {
        try {
            const { data } = completeTodo({
                variables: {todoId: id}
            });
        } 
        catch(err) {
            console.log(err)
        }
    }

    async function delTodo() {
        try {
            const { data } = deleteTodo({
                variables: {todoId: id}
            });
            window.location.reload();
        } 
        catch(err) {
            console.log(err)
        }
    }

    return(
        <div className={`flex shadow-md p-3 rounded justify-between container ${completed ? "bg-green-500" : "bg-yellow-300"} text-lg`}>
        <div className="flex flex-col">
            <p>{name}</p>
        </div>
        <div>
            {completed ? <button onClick={() => delTodo()} className="p-2 font-semibold bg-red-500 rounded">Delete</button> : <button onClick={() => compTodo()} className="p-2 font-semibold bg-green-500 rounded">Complete</button>}
        </div>
        </div>
    )
}