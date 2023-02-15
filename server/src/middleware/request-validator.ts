import { body } from "express-validator";

// Check mandatory fields
export const ScoreAddRequestValidator: any = [
    body("player").isString().withMessage('Player is required!'),
    body("category").isString().withMessage('Category is required!'),
    body("score").isNumeric().withMessage('Score is required!'),
];