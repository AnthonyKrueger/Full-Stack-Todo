const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    name: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = model('Todo', todoSchema)

module.exports = { Todo }