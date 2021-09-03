const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection')

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startServer() {
    await server.start()
    server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

db.once('open', () => {
    console.log("Database Accessed")
    app.listen(PORT, () => {
        console.log("Listening!")
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})