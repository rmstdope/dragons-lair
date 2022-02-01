const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers.ts");
const fs = require("fs");
const path = require("path");

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
