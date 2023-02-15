import express, { Express } from "express";
import http from "http";
import cors from "cors";

import config from "./config/config";

import logger, { throwBadRequestError } from "./utils/logger";
import router from "./routes";

import createDBConnection from "./db/db-connection";

// import { SaveMessage, GetLastHundredMessages } from "./services/mongoose-messages-service";

const PORT = config.PORT;

const app: Express = express();

app.use(cors()); // Add cors middleware

app.use(router); // Add routes

createDBConnection();

app.listen(PORT, async () => {
    logger.info(`Server is running on port ${PORT}`);
});