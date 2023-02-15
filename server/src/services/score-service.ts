
import { Request, Response, NextFunction } from "express";
import { FilterQuery } from "mongoose";

import ScoreModel, { IScore } from "../models/score-model";

import { successResponseHandler } from "../utils/success-response-handler";

// get latest 7 high scores from database
export const getHighScoresLatestSeven = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        let query: FilterQuery<IScore> = {};

        const fields: any = {
            _id: 1,
            player: 1,
            score: 1,
            category: 1,
            createdAt: 1
        };

        const latestHighScores = await ScoreModel.find(query, fields);

        return await successResponseHandler(res, 200, "Scores fetch successful!", "scores", latestHighScores);
    } catch (err) {
        return next(err);
    }
};