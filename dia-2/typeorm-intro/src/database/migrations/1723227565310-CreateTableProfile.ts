import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProfile1723227565310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "profile",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "24"
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const hasTable = await queryRunner.hasTable("profile");
        if (hasTable) {
            await queryRunner.dropTable("profile");
        }
    }
}
