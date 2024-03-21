// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Hello!  I am a response!",
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});