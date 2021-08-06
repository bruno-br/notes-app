import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("notes")
export class Note {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  constructor(title: string, description: string) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
  }
}
