import {
  ApolloClient,
  //   createHttpLink,
  InMemoryCache,
  //   ApolloProvider,
} from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/api/graphql",
});
