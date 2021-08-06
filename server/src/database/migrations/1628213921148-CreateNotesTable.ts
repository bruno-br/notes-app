import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNotesTable1628213921148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "notes",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "title", type: "varchar" },
          { name: "description", type: "varchar" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("notes");
  }
}
