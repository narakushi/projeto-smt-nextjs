import { Client } from "@/graphql/client";

export async function getDataGraphql(query) {
  const response = await Client().request(query);
  return response;
}