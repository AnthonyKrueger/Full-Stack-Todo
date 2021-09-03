import Todo from "../Todo"

export default function ToDoList({todos}) {

    const todoItems = todos.map((todo, index) => {
        return (
            <Todo name={todo.name} id={todo._id} key={`todo${index}`} completed={todo.completed} />
        )
    })

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-5 py-5">
            {todoItems}
        </div>
    )
}
