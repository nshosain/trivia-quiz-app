import { Router } from "express";

import jsonParser from "../middleware/json-parser";
import { ScoreAddRequestValidator } from "../middleware/request-validator";
import { addScore, getHighScoresLatestSeven } from "../services/score-service";

const ScoreRouter = Router();

// route to get scores from database
ScoreRouter.get("/", getHighScoresLatestSeven);
// route to post scores to database
ScoreRouter.post("/", jsonParser, ScoreAddRequestValidator, addScore);

export default ScoreRouter;