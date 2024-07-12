import { RequestHandler } from "express"
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

import UserModel from "../models/user"


interface SignUpBody {
    username: string,
    email: string,
    password: string
}

export const SignUp:RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    const {username, email, password: passwordRaw} = req.body;

    try {
        if (!username || !email || !passwordRaw) {
            throw createHttpError(400, "parameter missing");
        }

        const existingUsername = await UserModel.findOne({username: username}).exec();

        if (existingUsername) {
            throw createHttpError(409, "Username is already taken please try a different one");
        }

        const existingEmail = await UserModel.findOne({email: email}).exec();

        if (existingEmail) {
            throw createHttpError(409, "Email is already taken please try a different one");
        }

        const hashedPassword = await bcrypt.hash(passwordRaw, 10);

        const newUser = await UserModel.create({
            username: username, email: email, password: hashedPassword
        })

        // TODO: add the user to session
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
}

interface LoginBody {
    username: string,
    password: string,
}

export const Login:RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const {username, password} = req.body;

    try {
        if (!username || !password) {
            throw createHttpError(401, "Parameters missing");
        }

        const user = await UserModel.findOne({username: username}).exec();

        if (!user) {
            throw createHttpError(400, "Invalid Credentials");
        }

        const passwordMatch = await bcrypt.compare(password, user.password!);

        if (!passwordMatch) {
            throw createHttpError(400, "Invalid Credentials");
        }

        // TODO: Add user session here
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}

