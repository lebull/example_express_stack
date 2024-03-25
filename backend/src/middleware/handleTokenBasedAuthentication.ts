import { NextFunction, Request, Response } from "express";

const userMap = {
    username: "test1",
    firstname: "John",
    lastname: "Doe",
};

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if(token === undefined) {
        res.sendStatus(401);
    } else {
        const user = userMap;
        req.user = user;
        next();
    }
}