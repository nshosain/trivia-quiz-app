
import { Request, Response, NextFunction } from "express";
import { DocumentDefinition } from "mongoose";

import ScoreModel, { IScore } from "../models/score-model";

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

// add score to database
export const addScore = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const input: DocumentDefinition<IScore> = req.body;

        await ScoreModel.create(input);

        return await successResponseHandler(res, 201, "Score added successfully");
    } catch (err) {
        return next(err);
    }
};