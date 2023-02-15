import { Router } from "express";

import { getHighScoresLatestSeven } from "../services/score-service";

const ScoreRouter = Router();

// route to get scores from database
ScoreRouter.get("/", getHighScoresLatestSeven);
// route to post scores to database
ScoreRouter.post("/", async (req, res, next) => {
    res.status(200).send('OK');
});

export default ScoreRouter;