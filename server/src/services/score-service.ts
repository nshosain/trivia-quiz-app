
import { Request, Response, NextFunction } from "express";

import ScoreModel from "../models/score-model";

import { successResponseHandler } from "../utils/success-response-handler";

// get latest 7 high scores from database
export const getHighScoresLatestSeven = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const latestHighScores = await ScoreModel.find().sort({ score: -1 }).limit(7);

        return await successResponseHandler(res, 200, "Scores fetch successful", "scores", latestHighScores);
    } catch (err) {
        return next(err);
    }
};