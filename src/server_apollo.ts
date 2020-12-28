require("dotenv").config()
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import logger from "morgan";
import schema from './schema';

const { PORT = 4000 } = process.env;
const server = new ApolloServer({ schema });
const app = express();

app.use(logger("dev"));

server.applyMiddleware({ app });

app.listen( { port: PORT }, () => {
    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}\n`,
    );
});