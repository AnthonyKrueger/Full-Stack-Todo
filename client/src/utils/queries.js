import {gql} from '@apollo/client';

export const GET_ALL_TODOS = gql`
    query allTodos {
        todos {
            name
            completed
            _id
        }
    }
`
export const GET_TODO = gql`
    query getOneTodo($todoId: ID!) {
    todo(todoId: $todoId) {
        name
        completed
        _id
    }
    }
`

