const { Todo } = require('../models')

const resolvers = {
    Query: {
        todos: async() => {
            return await Todo.find({})
        },

        todo: async (parent, {todoId}) => {
            return await Todo.findOne({_id: todoId})
        }
    },

    Mutation: {
        addTodo: async (parent, {name}) => {
            return await Todo.create({name})
        },
        completeTodo: async (parent, {todoId}) => {
            return await Todo.findOneAndUpdate({_id: todoId}, {completed: true}, {new: true})
        },
        deleteTodo: async(parent, {todoId}) => {
            return await Todo.findOneAndDelete({_id: todoId})
        }
    }
}

module.exports = resolvers;