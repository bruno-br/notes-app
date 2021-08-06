import { Request, Response } from "express";
import { DeleteNoteService } from "../services/DeleteNoteService";

export class DeleteNotesController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send();
    }

    const deleteNoteService = new DeleteNoteService();
    const note = await deleteNoteService.execute(id);

    return res.status(200).json(note);
  }
}
