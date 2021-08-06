import { getRepository } from "typeorm";
import { Note } from "../entities/Note";

export class CreateNoteService {
  async execute(title: string, description: string) {
    const noteRepository = await getRepository(Note);
    const note = noteRepository.create({ title, description });
    await noteRepository.save(note);
    return note;
  }
}
