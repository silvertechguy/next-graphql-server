import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = { api: { bodyParser: false } }; // we need to tell Next.js not to parse the incoming request and let GraphQL handle it for us.

export default apolloServer.createHandler({ path: "/api/graphql" }); // we use apolloServer to create a new handler, which means the path /api/graphql will serve as an entry point for our GraphQL server.

// Unlike regular Apollo Server, Next.js handles the start of the server for us since it relies on server-side rendering. That is why, here, we don’t have to start the GraphQL server on our own.
