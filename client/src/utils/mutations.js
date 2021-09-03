import { gql } from "@apollo/client";

export const ADD_TODO = gql`

    mutation addTodo($name: String!) {
    addTodo(name: $name) {
    _id
    name
    completed
  }
}
`

export const COMPLETE_TODO = gql`

    mutation completeTodo($todoId: ID!) {
        completeTodo(todoId: $todoId) {
        _id
        name
        completed
  }
}
`

export const DELETE_TODO = gql`

    mutation deleteTodo($todoId: ID!) {
        deleteTodo(todoId: $todoId) {
        _id
        name
        completed
  }
}
`