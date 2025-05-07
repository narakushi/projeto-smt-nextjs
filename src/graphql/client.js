import { GraphQLClient } from "graphql-request";

export function Client() {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL;
  const client = new GraphQLClient(endpoint, {
    method: "GET",
    jsonSerializer: {
      parse: JSON.parse,
      stringify: JSON.stringify
    },
  })

  return client;
}