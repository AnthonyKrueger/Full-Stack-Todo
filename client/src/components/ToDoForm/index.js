import {useState} from 'react'

export default function ToDoForm() {

    const [text, setText] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(text)
    }

    return (
    <form>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)}></input>
        <button onClick={handleSubmit}>Add Todo</button>
    </form>
    )
}