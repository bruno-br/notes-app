import { Request, Response } from "express";
import { CreateNoteService } from "../services/CreateNoteService";

export class CreateNoteController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;

    const createNoteService = new CreateNoteService();
    const note = await createNoteService.execute(title, description);

    return res.status(200).json(note);
  }
}
