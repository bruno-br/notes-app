import { Request, Response } from "express";

export class CreateNoteController {
  async handle(req: Request, res: Response) {
    return res.status(200).json(req.body);
  }
}
