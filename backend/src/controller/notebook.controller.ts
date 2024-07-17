import { RequestHandler } from "express";
import createHttpError from "http-errors";

import NotebookModel from "../models/notebook";

interface CreateNotebookBody {
    title: string,
    description: string,
}

export const CreateNotebook:RequestHandler<unknown, unknown, CreateNotebookBody, unknown> = async(req, res, next) => {
    const userId = req.session["userId"];
    console.log("User Id: ", userId);
    const {title, description} = req.body;

    try {
        if (!title || !description) {
            throw createHttpError(400, "Parameter Missing");
        }

        const newNotebook = await NotebookModel.create({
            userId: userId, title: title, description: description
        });

        res.status(200).json(newNotebook);
    } catch (error) {
        next(error);
    }
}

