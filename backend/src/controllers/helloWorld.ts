import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const helloWorld = asyncHandler( async (req: Request, res: Response) => {
    res.json({
        message: "Hello!  I am a response!",
    });
});