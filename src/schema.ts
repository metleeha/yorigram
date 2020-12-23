import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from "path";

const allTypes: any[] = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers: any[] = fileLoader(path.join(__dirname, "/api/**/*.ts"));

const typeDefs: string = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;