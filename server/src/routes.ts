import { Router } from "express";
import { CreateNoteController } from "./controllers/CreateNoteController";

const router = Router();
const createNoteController = new CreateNoteController();

router.post("/notes", createNoteController.handle);

export { router };
