import { getRepository } from "typeorm";
import { Note } from "../entities/Note";

export class DeleteNoteService {
  async execute(id: string) {
    const noteRepository = await getRepository(Note);

    return await noteRepository.delete({ id });
  }
}
