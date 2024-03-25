"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const userMap = {
    username: "test1",
    firstname: "John",
    lastname: "Doe",
};
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (token === undefined) {
        res.status(401);
    }
    else {
        const user = userMap;
        req.user = user;
        next();
    }
};
exports.authenticate = authenticate;
