import mongoose, { Document, Schema } from "mongoose";

export interface IScore {
    player: string,
    score: number,
    category: string
}

export interface IScoreSchema extends IScore, Document { }

export const ScoreSchema: Schema = new Schema(
    {
        player: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const ScoreModel = mongoose.model<IScoreSchema>("scores", ScoreSchema);
export default ScoreModel;