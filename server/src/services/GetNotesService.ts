import { getRepository } from "typeorm";
import { Note } from "../entities/Note";

export class GetNotesService {
  async execute() {
    const noteRepository = await getRepository(Note);

    const notes = await noteRepository.find();

    return notes;
  }
}
