import { GraphQLClient } from "graphql-request"

const url = process.env.GRAPHQL_ENDPOINT_URL ?? ""
export const graphqlClient = new GraphQLClient(url)
