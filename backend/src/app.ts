import "dotenv/config"
import express, {Request, Response, NextFunction} from "express";
import morgan from "morgan";
import { isHttpError } from 'http-errors';

import UserModel from "./models/user";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/", async (req, res) => {
    const users = await UserModel.find().exec();
    res.status(200).json(users);
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An Unknown Error Occured";
    let errorStatus = 500;
    if (isHttpError(error)) {
        errorMessage = error.message;
        errorStatus = error.status;
    }
    res.status(errorStatus).json({error: errorMessage});
})

export default app;