import { Request, Response } from "express";
import { GetNotesService } from "../services/GetNotesService";

export class GetNotesController {
  async handle(req: Request, res: Response) {
    const getNotesService = new GetNotesService();
    const notes = await getNotesService.execute();
    return res.status(200).json(notes);
  }
}
