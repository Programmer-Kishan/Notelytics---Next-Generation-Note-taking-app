import express from "express";
import * as NotebookController from "../controller/notebook.controller";

const router = express.Router();

router.post('/create', NotebookController.CreateNotebook);

export default router;