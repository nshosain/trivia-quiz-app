import { Response } from "express";

interface ISuccessResponse {
    status: string;
    statusCode: number;
    message: string;
    [key: string]: any;
}

export const successResponseHandler = async (res: Response, statusCode: number, message: string, keyOfData?: (string | null), data?: any) => {

    let successResponse: ISuccessResponse = {
        status: "success",
        statusCode: statusCode,
        message: message
    };

    if (keyOfData && data) successResponse[keyOfData] = data;
    if (!keyOfData && data) successResponse = { ...successResponse, ...data };

    return res.status(statusCode).json(successResponse);
};