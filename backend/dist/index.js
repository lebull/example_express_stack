"use strict";
// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
// const client = new DynamoDB({
//     region: "us-east-2", 
//     credentials: {
//         accessKeyId: 'local',
//         secretAccessKey: 'local',
//     },
//     endpoint: "http://localhost:8000"
// });
// app.get('/db-tables', (req: Request, res: Response) => {
//     const tables = client.listTables({});
//     res.json({
//         ...tables
//     });
// });
app.use("/", routes_1.router);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
