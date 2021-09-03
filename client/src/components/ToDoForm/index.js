import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ADD_TODO } from '../../utils/mutations'
import { GET_ALL_TODOS } from '../../utils/queries'

export default function ToDoForm() {

    const [text, setText] = useState("")

    const [addTodo, { error }] = useMutation(ADD_TODO, {
        // The update method allows us to access and update the local cache
        update(cache, { data: { addTodo } }) {
            try {
                // First we retrieve existing profile data that is stored in the cache under the `QUERY_PROFILES` query
                // Could potentially not exist yet, so wrap in a try/catch
                const { todos } = cache.readQuery({ query: GET_ALL_TODOS });

                // Then we update the cache by combining existing profile data with the newly created data returned from the mutation
                cache.writeQuery({
                    query: GET_ALL_TODOS,
                    // If we want new data to show up before or after existing data, adjust the order of this array
                    data: { todos: [...todos, addTodo] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    function handleSubmit(event) {
        event.preventDefault()
        try {
            const { data } = addTodo({
                variables: { name: text },
            });
            setText("")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="shadow-md rounded-lg bg-blue-400 py-5 my-5 mx-10">
            <input className="rounded mr-3 border-2 border-black" type="text" value={text} onChange={(event) => setText(event.target.value)}></input>
            <button onClick={(event) => handleSubmit(event)}>Add Todo</button>
        </form>
    )
}