import express, { Express } from "express";
import cors from "cors";

import config from "./config/config";

import logger from "./utils/logger";
import router from "./routes";

import createDBConnection from "./db/db-connection";

const PORT = config.PORT;

const app: Express = express();

app.use(cors()); // Add cors middleware
app.use(router); // Add routes

createDBConnection();

app.listen(PORT, async () => {
    logger.info(`Server is running on port ${PORT}`);
});