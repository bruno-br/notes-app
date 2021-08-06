import { Router } from "express";
import { CreateNoteController } from "./controllers/CreateNoteController";
import { GetNotesController } from "./controllers/GetNotesController";

const router = Router();

const getNotesController = new GetNotesController();
const createNoteController = new CreateNoteController();

router.get("/notes", getNotesController.handle);
router.post("/notes", createNoteController.handle);

export { router };
