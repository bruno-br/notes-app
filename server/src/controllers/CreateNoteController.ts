import { Request, Response } from "express";
import { CreateNoteService } from "../services/CreateNoteService";

export class CreateNoteController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).send();
    }

    const createNoteService = new CreateNoteService();
    const note = await createNoteService.execute(title, description);

    return res.status(201).json(note);
  }
}
