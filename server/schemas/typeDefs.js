const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Todo {
        _id: ID
        name: String
        completed: Boolean
    }

    type Query {
        todos: [Todo]
        todo(todoId: ID!): Todo
    }

    type Mutation {
        addTodo(name: String!): Todo
        completeTodo(todoId: ID!): Todo
        deleteTodo(todoId: ID!): Todo
    }

`

module.exports = typeDefs