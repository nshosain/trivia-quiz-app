import { Router } from "express";

const ScoreRouter = Router();

// route to get scores from database
ScoreRouter.get("/", async (req, res, next) => {
    res.status(200).send('OK');
});
// route to post scores to database
ScoreRouter.post("/", async (req, res, next) => {
    res.status(200).send('OK');
});

export default ScoreRouter;