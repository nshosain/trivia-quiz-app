import { Router } from "express";

import ScoreRouter from "./score-route";

const router = Router();

router.use("/api/v1/scores", ScoreRouter);

router.get("/health", async (req, res, next) => {
    res.status(200).send('OK');
});

export default router;