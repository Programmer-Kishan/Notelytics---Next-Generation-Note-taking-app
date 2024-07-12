import express from "express";
import * as UserController from "../controller/user.controller";

const router = express.Router();

router.post("/signup", UserController.SignUp);
router.post("/login", UserController.Login);

export default router;