const express = require("express");
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require("cors");
const schema = require("./schema");
const app = express();

//Allow Cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
