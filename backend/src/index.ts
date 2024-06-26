// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln

import { DynamoDB } from '@aws-sdk/client-dynamodb';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';
import { User } from "./extensions/request";



const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

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

app.use("/", router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});