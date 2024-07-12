import "dotenv/config"
import express, {Request, Response, NextFunction} from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from 'http-errors';

import UserModel from "./models/user";
import userRoutes from "./routes/user.route";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/", async (req, res) => {
    const users = await UserModel.find().exec();
    res.status(200).json(users);
})

app.use("/api/user", userRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint Not Found"));
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