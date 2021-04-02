const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 8080;
const API_URL = `http://localhost:${PORT}/graphql`;

const app = express();
app.use(cors());

// apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server is up and running on ${API_URL}`);
});

https://github.com/exponentian/apollo-express-server-tutorial/tree/master/src/schema
