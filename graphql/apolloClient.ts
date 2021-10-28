import { ApolloClient, InMemoryCache } from "@apollo/client"

import result from "./introspection-result"

// TODO
const uri = "http://localhost:8080/v1/graphql"

const cache = new InMemoryCache(result)

export const client = new ApolloClient({
  uri,
  cache,
})
