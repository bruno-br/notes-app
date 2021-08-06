import { Router } from "express";
import { CreateNoteController } from "./controllers/CreateNoteController";
import { GetNotesController } from "./controllers/GetNotesController";
import { DeleteNotesController } from "./controllers/DeleteNoteController";

const router = Router();

const getNotesController = new GetNotesController();
const createNoteController = new CreateNoteController();
const deleteNoteController = new DeleteNotesController();

router.get("/notes", getNotesController.handle);
router.post("/notes", createNoteController.handle);
router.delete("/notes", deleteNoteController.handle);

export { router };
