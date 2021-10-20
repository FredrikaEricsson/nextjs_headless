import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://labback.avantime.io/graphql",
  cache: new InMemoryCache(),
});
