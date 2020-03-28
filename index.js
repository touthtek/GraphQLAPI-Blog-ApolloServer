const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');
const context = require('./contex');
const schema = require('./schema');
const resolvers = require('./resolvers');




// All the code needed for a working GraphQL API
// context, typeDefs (schema), and resolvers
const server = new ApolloServer({
  context: context,
  typeDefs:schema,
  resolvers: resolvers, 
});

server.listen(3000)
.then(({ url }) => console.log(`Server ready at ${url}`));