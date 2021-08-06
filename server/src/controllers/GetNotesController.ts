import { Request, Response } from "express";

export class GetNotesController {
  async handle(req: Request, res: Response) {
    const notes = [
      { title: "Note 1", description: "Text" },
      { title: "Note 2", description: "Text 2" },
    ];
    return res.status(200).json(notes);
  }
}
